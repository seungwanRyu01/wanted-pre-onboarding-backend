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

// 특정 게시글 조회
async function getElementContent(connection, board_index) {
    const getElementQuery = `
        SELECT * FROM Board WHERE idx = ? LIMIT 1;
    `;
    const [getContentsRows] = await connection.query(getElementQuery, board_index);
    return getContentsRows;
}

// 특정 게시글 작성자 인덱스 조회
async function getUserIdx(connection, boardIdx) {
    const getUserIdxQuery = `
        SELECT user_index FROM Board WHERE idx = ? LIMIT 1;
    `;
    const [getUserIdxRows] = await connection.query(getUserIdxQuery, boardIdx);
    return getUserIdxRows;
}

// 게시글 수정
async function updateBoard(connection, title, description, boardIdx) {
    const updateBoardQuery = `
        UPDATE Board 
        SET title = COALESCE(?, title), description = COALESCE(?, description) 
        WHERE idx = ?
    `;
    const [updateRows] = await connection.query(updateBoardQuery, [title, description, boardIdx]);
    return updateRows;
}

module.exports = {
    insertBoard,
    getPagingContents,
    getElementContent,
    getUserIdx,
    updateBoard
}