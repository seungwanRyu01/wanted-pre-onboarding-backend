const { logger } = require("../../config/winston");
const { pool } = require("../../config/mysql2");
const jwt = require("jsonwebtoken");
const crypto = require("crypto");
const userDao = require("./userDao");
const userProvider = require("./userProvider");
const baseResponse = require("../../config/baseResponseStatus");
const { response, errResponse } = require("../../config/response");
require('dotenv').config();

// 사용자 회원 가입
exports.createUser = async function (email, password) {
    try {
        // 이메일 중복 확인
        const emailRows = await userProvider.emailCheck(email);
        if (emailRows.length > 0) return errResponse(baseResponse.SIGNUP_REDUNDANT_EMAIL);

        // 비밀번호 암호화
        const hashedPassword = await crypto
            .createHash("sha512")
            .update(password)
            .digest("hex");
        
        const insertUserInfoParams = [email, hashedPassword];

        const connection = await pool.getConnection(async (conn) => conn);
        const userIdResult = await userDao.insertUserInfo(connection, insertUserInfoParams);

        console.log(`추가된 회원 : ${userIdResult[0].insertId}`);
        await connection.release();
        return response(baseResponse.REGISTER_SUCCESS);
    } catch (err) {
        logger.error(`App - createUser Service error\n: ${err.message}`);
        return errResponse(baseResponse.DB_ERROR);
    }
};

// 사용자 로그인
exports.postSignIn = async function (email, password) {
    try {
        // 이메일 여부 확인
        const emailRows = await userProvider.emailCheck(email);
        if (emailRows.length < 1) return errResponse(baseResponse.SIGNIN_EMAIL_WRONG);
        const selectIdx = emailRows[0].idx;
        const selectEmail = emailRows[0].email;

        // 비밀번호 확인
        const hashedPassword = await crypto
            .createHash("sha512")
            .update(password)
            .digest("hex");

        const passwordRows = await userProvider.passwordCheck(email);
        if (passwordRows[0].password !== hashedPassword) return errResponse(baseResponse.SIGNIN_PASSWORD_WRONG);

        // 토큰 생성 Service
        let token = await jwt.sign(
            // 토큰의 내용(payload)
            { 
                userId: selectIdx
            },
            // JWT SECRET KEY
            process.env.JWT_SECRET, 
            // 유효 기간 365일
            {
                expiresIn: "365d",
                subject: "userInfo",
            } 
        );

        return response(baseResponse.LOGIN_SUCCESS, {'userId': selectIdx, 'jwt_token': token});
    } catch (err) {
        logger.error(`App - postSignIn Service error\n: ${err.message} \n${JSON.stringify(err)}`);
        return errResponse(baseResponse.DB_ERROR);
    }
};