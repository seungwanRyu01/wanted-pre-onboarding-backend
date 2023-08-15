const userService = require("./userService");
const baseResponse = require("../../config/baseResponseStatus");
const { errResponse } = require("../../config/response");

/**
 * API No. 1
 * API Name : 회원가입 API
 * [POST] /users
 */
exports.postUsers = async function (req, res) {
    const { email, password } = req.body;

    // 이메일 형식 체크
    if (!email) return res.send(errResponse(baseResponse.SIGN_EMAIL_EMPTY));
    if (!email.includes('@')) return res.send(errResponse(baseResponse.SIGN_EMAIL_ERROR_TYPE));

    // 비밀번호 형식 체크
    if (!password) return res.send(errResponse(baseResponse.SIGN_PASSWORD_EMPTY));
    if (password.length < 8) return res.send(errResponse(baseResponse.SIGN_PASSWORD_LENGTH));

    const signUpResponse = await userService.createUser(email,password);
    return res.send(signUpResponse);
};

/**
 * API No. 2
 * API Name : 로그인 API
 * [POST] /login
 */
exports.login = async function (req, res) {
    const { email, password } = req.body;

    // 이메일 형식 체크
    if (!email) return res.send(errResponse(baseResponse.SIGN_EMAIL_EMPTY));
    if (!email.includes('@')) return res.send(errResponse(baseResponse.SIGN_EMAIL_ERROR_TYPE));

    // 비밀번호 형식 체크
    if (!password) return res.send(errResponse(baseResponse.SIGN_PASSWORD_EMPTY));
    if (password.length < 8) return res.send(errResponse(baseResponse.SIGN_PASSWORD_LENGTH));

    const signInResponse = await userService.postSignIn(email, password);
    return res.send(signInResponse);
};