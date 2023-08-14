const { pool } = require("../../config/mysql2");
const userDao = require("./userDao");

// 이메일, 인덱스 확인
exports.emailCheck = async function (email) {
    const connection = await pool.getConnection(async (conn) => conn);
    const emailCheckResult = await userDao.selectUserEmail(connection, email);
    await connection.release();

    return emailCheckResult;
};

// 비밀번호 확인
exports.passwordCheck = async function (email) {
    const connection = await pool.getConnection(async (conn) => conn);
    const passwordCheckResult = await userDao.selectUserPassword(connection, email);
    await connection.release();

    return passwordCheckResult[0];
};