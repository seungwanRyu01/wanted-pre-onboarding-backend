const { logger } = require("../../config/winston");
const { pool } = require("../../config/mysql2");
const boardDao = require("./boardDao");
const baseResponse = require("../../config/baseResponseStatus");
const { response, errResponse } = require("../../config/response");

// 게시글 생성
exports.createContents = async function ( userIdFromJWT, title, description ) {
    try {
        const connection = await pool.getConnection(async (conn) => (conn));
        const contentsQuery = await boardDao.insertBoard(connection, userIdFromJWT, title, description);
        const boardId = contentsQuery.insertId;

        await connection.release();
        return response(baseResponse.BOARD_INSERT_SUCCESS, { boardId: boardId });
    } catch (err) {
        logger.error(`App - createContents Service error\n: ${err.message}`);
        return errResponse(baseResponse.DB_ERROR);
    }
}

// 리뷰 수정
exports.editBoard = async function ( title, description, boardIdx ) {
    const connection = await pool.getConnection(async (conn) => conn);
    await connection.beginTransaction();
    try {
        await boardDao.updateBoard(connection, title, description, boardIdx);
        await connection.commit();
        return response(baseResponse.BOARD_EDIT_SUCCESS);
    } catch (err) {
        logger.error(`App - editBoard Service error\n: ${err.message}`);
        await connection.rollback();
        return errResponse(baseResponse.DB_ERROR);
    } finally {
        await connection.release();
    }
}

// 리뷰 삭제 
exports.deleteBoard = async function (boardIdx) {
    const connection = await pool.getConnection(async (conn) => conn);
    await connection.beginTransaction();
    try {
        await boardDao.deleteBoard(connection, boardIdx);
        await connection.commit();
        return response(baseResponse.BOARD_DELETE_SUCCESS);
    } catch (err) {
        logger.error(`App - deleteBoard Service error\n: ${err.message}`);
        await connection.rollback();
        return errResponse(baseResponse.DB_ERROR);
    } finally {
        await connection.release();
    }
}