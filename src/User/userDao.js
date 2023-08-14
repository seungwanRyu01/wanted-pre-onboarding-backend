// 회원 이메일로 조회 (jwt 토큰 생성 포함)
async function selectUserEmail(connection, email) {
    const selectUserEmailQuery = `
        SELECT idx, email FROM User WHERE email = ?;
    `;
    const [emailRows] = await connection.query(selectUserEmailQuery, email);
    return emailRows;
}

// 회원 패스워드 조회
async function selectUserPassword(connection, email) {
    const selectUserPasswordQuery = `
        SELECT password FROM User WHERE email = ?;
    `;
    const selectUserPasswordRow = await connection.query(selectUserPasswordQuery, email);
    return selectUserPasswordRow;
}

// 유저 생성
async function insertUserInfo(connection, insertUserInfoParams) {
    const insertUserInfoQuery = `
        INSERT INTO User(email, password) VALUES (?, ?);
    `;
    const insertUserInfoRow = await connection.query(insertUserInfoQuery, insertUserInfoParams);
    return insertUserInfoRow;
}

module.exports = {
    selectUserEmail,
    insertUserInfo,
    selectUserPassword
};