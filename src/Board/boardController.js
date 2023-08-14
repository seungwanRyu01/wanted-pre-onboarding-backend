const jwtMiddleware = require("../../config/jwtMiddleware");
const boardProvider = require("./boardProvider");
const boardService = require("./boardService");
const baseResponse = require("../../config/baseResponseStatus");
const { response, errResponse } = require("../../config/response");

/**
 * API No. 3
 * API Name : 게시글 생성 API
 * [POST] /contents
 */
exports.postContents = async function (req, res) {
    const userIdFromJWT = req.verifiedToken.userId;
    const { title, description } = req.body;

    if (!title) return res.send(errResponse(baseResponse.BOARD_TITLE_EMPTY));
    if (!description) return res.send(errResponse(baseResponse.BOARD_DESCRIPTION_EMPTY));

    const contentsResponse = await boardService.createContents(userIdFromJWT, title, description);
    return res.send(contentsResponse);
}

// /**
//  * API No. 4
//  * API Name : 게시글 목록 조회 API
//  * [GET] /whole-contents
//  */
// exports.getWholeContents = async function (req, res) {
//     /**
//      * Query String: name
//      */
//     const name = req.query.name;
//     const productListResult = await productProvider.productsInfo();
//     const nameValue = await Promise.all(productListResult.map(async(val) => val.name))

//     if (!name) {
//         // 상품 전체 조회
//         return res.send(response(baseResponse.SUCCESS, productListResult));
//     } else {
//         // 상품 검색어 조회
//         const nameResult = await productProvider.productsInfo(name);
//         for (i=0; i<nameValue.length; i++) {
//             if (!nameValue[i].includes(name)) {
//                 return res.send(errResponse(baseResponse.SEARCH_KEYWORD_INCORRECT));
//             } else {
//                 return res.send(response(baseResponse.SUCCESS, nameResult));
//             }
//         }
//     }
// };

// /**
//  * API No. 5
//  * API Name : 특정 게시글 조회 API
//  * [GET] /element-contents
//  */
// exports.getElementContents = async function (req, res) {
//     /**
//      * Path Variable : productIdx
//      */
//     const productIdx = req.params.productIdx;
//     const productListResult = await productProvider.productsInfo();
//     const productsIdList = await Promise.all(productListResult.map(async(val) => val.coupangIdx))

//     if (!productIdx) {
//         return res.send(errResponse(baseResponse.PRODUCT_PRODUCTID_EMPTY));
//     } else {
//         if (!productsIdList.includes(parseInt(productIdx))) {
//             return res.send(errResponse(baseResponse.PRODUCT_INNER_LIST_EMPTY));
//         } else {
//             const productByProductId = await productProvider.viewProductById(productIdx);
//             return res.send(response(baseResponse.SUCCESS, productByProductId));
//         }
//     }
// };

// /**
//  * API No. 6
//  * API Name : 게시글 수정 API
//  * [PATCH] /contents
//  */
// exports.patchContents = async function (req, res) {

//     const userIdFromJWT = req.verifiedToken.userId;
//     const userIdx = req.params.userIdx;
//     const {reviewId, score, contents} = req.body;
//     const {reviewType} = req.query;

//     const imageUrl = await Promise.all(
//         req.files.map(async(val) => val.location)
//     )

//     if(!userIdx) return res.send(errResponse(baseResponse.REVIEW_USERIDX_EMPTY));
//     if (userIdFromJWT != userIdx) {
//         return res.send(errResponse(baseResponse.USER_ID_NOT_MATCH));
//     } else {
//         if (!reviewType) return res.send(errResponse(baseResponse.EDIT_REVIEW_TYPE_EMPTY));
//         if (reviewType !== 'REVIEW' && reviewType !== 'REVIEW_IMAGE') return res.send(errResponse(baseResponse.EDIT_REVIEW_TYPE_ERROR));
//         if (reviewType === 'REVIEW') {
//             if(!reviewId) return res.send(errResponse(baseResponse.EDIT_REVIEWID_EMPTY));
//             if(!score) return res.send(errResponse(baseResponse.EDIT_SCORE_EMPTY));
//             if(!contents) return res.send(errResponse(baseResponse.EDIT_CONTENTS_EMPTY));

//             const editUserReview = await reviewService.editReview(reviewId, score, contents);
//             const result = {reviewId, score, contents}
//             return res.send(response(editUserReview, result));
//         } else {
//             if(!reviewId) return res.send(errResponse(baseResponse.EDIT_REVIEWID_EMPTY));
//             if(!imageUrl) return res.send(errResponse(baseResponse.EDIT_IMAGE_EMPTY));
//             const reviewImageResponse = await reviewService.editReviewImage(reviewId, imageUrl);
//             return res.send(response(reviewImageResponse));
//         }
//     }
// }

// /**
//  * API No. 7
//  * API Name : 게시글 삭제 API
//  * [DELETE] /contents
//  */
// exports.deleteContents = async function (req, res) {

//     const userIdFromJWT = req.verifiedToken.userId;
//     const userIdx = req.params.userIdx;
//     const {reviewId} = req.body;
//     const {reviewType} = req.query;

//     // const imageUrl = await Promise.all(
//     //     req.files.map(async(val) => val.location)
//     // )

//     if(!userIdx) return res.send(errResponse(baseResponse.REVIEW_USERIDX_EMPTY));
//     if (userIdFromJWT != userIdx) {
//         return res.send(errResponse(baseResponse.USER_ID_NOT_MATCH));
//     } else {
//         if (!reviewType) return res.send(errResponse(baseResponse.DELETE_REVIEW_TYPE_EMPTY));
//         if (reviewType !== 'REVIEW' && reviewType !== 'REVIEW_IMAGE') return res.send(errResponse(baseResponse.DELETE_REVIEW_TYPE_ERROR));
//         if (reviewType === 'REVIEW'){
//             if(!reviewId) return res.send(errResponse(baseResponse.DELETE_REVIEWID_EMPTY));
//             const deleteUserReview = await reviewService.deleteReview(reviewId);
//             return res.send(response(deleteUserReview));
//         } else {
//             if(!reviewId) return res.send(errResponse(baseResponse.DELETE_REVIEWID_EMPTY));
//             const deleteImageResponse = await reviewService.deleteReviewImage(reviewId);
//             return res.send(response(deleteImageResponse));
//         }
//     }
// }