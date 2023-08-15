const { pool } = require("../../config/mysql2");
const boardDao = require("./boardDao");

// 게시글 전체 목록 조회
exports.getWholeContents = async function (page, pageSize) {
    const connection = await pool.getConnection(async (conn) => conn);
    const contentsResult = await boardDao.getPagingContents(connection, page, pageSize);
    await connection.release();
    return contentsResult;
}

// 특정 게시글 조회
exports.getBoardById = async function (board_index) {
    const connection = await pool.getConnection(async (conn) => conn);
    const contentsResult = await boardDao.getElementContent(connection, board_index);
    await connection.release();
    return contentsResult;
}

// 게시글 작성자 인덱스 조회
exports.getUserIdxFromBoard = async function (boardIdx) {
    const connection = await pool.getConnection(async (conn) => conn);
    const userIdxResult = await boardDao.getUserIdx(connection, boardIdx);
    await connection.release();
    return userIdxResult;
}