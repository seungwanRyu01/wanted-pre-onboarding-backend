// 게시글 생성
async function insertBoard(connection, userIdFromJWT, title, description) {
    const createBoardQuery = `
        INSERT INTO Board(user_index, title, description) VALUES (?, ?, ?);
    `;
    const [createBoardRows] = await connection.query(createBoardQuery, [userIdFromJWT, title, description])
    return createBoardRows;
};

// 페이징 처리한 게시글 목록 조회
async function getPagingContents(connection, page, pageSize) {
    const getPagingQuery = `
        SELECT * FROM Board LIMIT ${(page - 1) * pageSize}, ${pageSize};
    `;
    const [getPagingContentsRows] = await connection.query(getPagingQuery);
    return getPagingContentsRows;
}

// 특정 게시글 목록 조회
async function getElementContent(connection, board_index) {
    const getElementQuery = `
        SELECT * FROM Board WHERE idx = ? LIMIT 1;
    `;
    const [getContentsRows] = await connection.query(getElementQuery, board_index);
    return getContentsRows;
}

module.exports = {
    insertBoard,
    getPagingContents,
    getElementContent
}