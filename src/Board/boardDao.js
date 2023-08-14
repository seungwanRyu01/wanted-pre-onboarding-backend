// 게시글 생성
async function insertBoard(connection, userIdFromJWT, title, description) {
    const createBoardQuery = `
        INSERT INTO Board(user_index, title, description) VALUES (?, ?, ?);
    `;
    const [createBoardRows] = await connection.query(createBoardQuery, [userIdFromJWT, title, description])
    return createBoardRows;
};

module.exports = {
    insertBoard
}