const { logger } = require("../../config/winston");
const { pool } = require("../../config/mysql2");
const boardDao = require("./boardDao");
const baseResponse = require("../../config/baseResponseStatus");
const { response, errResponse } = require("../../config/response");

// 게시글 생성
exports.createContents = async ( userIdFromJWT, title, description ) => {
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

// // 리뷰 수정
// exports.editReview = async (reviewId, score, contents) => {

//     const connection = await pool.getConnection(async (conn) => conn);
//     try {
//         await connection.beginTransaction();
//         const editReviewResult = await reviewDao.updateUserReview(connection, score, contents, reviewId);
//         await connection.commit();

//     } catch (err) {
//         logger.error(`App - editReview Service error\n: ${err.message}`);
//         return errResponse(baseResponse.DB_ERROR);
//     } finally {
//         connection.release();
//         return response(baseResponse.SUCCESS);
//     }
// }

// // 리뷰 삭제 
// exports.deleteReview = async (reviewId) => {

//     const connection = await pool.getConnection(async (conn) => conn);
//     console.log("리뷰 ID : " + reviewId);
//     try {
//         await connection.beginTransaction();
//         // const deleteForeignKeysUser = await reviewDao.deleteForeignKeysUserIdReview(connection, reviewId);
//         // const deleteForeignKeysOwner = await reviewDao.deleteForeignKeysOwnerIdReview(connection, reviewId);
//         // const deleteForeignKeysProduct = await reviewDao.deleteForeignKeysProductIdReview(connection, reviewId);
//         const deleteReviewResult = await reviewDao.deleteUserReview(connection, reviewId);
        
//         await connection.commit();
//         return response(baseResponse.SUCCESS);
//     } catch (err) {
//         logger.error(`App - deleteReview Service error\n: ${err.message}`);
//         return errResponse(baseResponse.DB_ERROR);
//     } finally {
//         connection.release();
//     }
// }