module.exports = function (route) {
    const board = require('./boardController');
    const jwtMiddleware = require('../../config/jwtMiddleware');

    // 3. 게시글 생성 API
    route.post('/contents', jwtMiddleware, board.postContents);

    // 4. 게시글 목록 조회 API
    route.get('/whole-contents', board.getWholeContents);

    // 5. 특정 게시글 조회 API
    route.get('/element-contents', board.getElementContents);

    // 6. 게시글 수정 API
    route.patch('/contents/:boardIdx', jwtMiddleware, board.patchContents);

    // 7. 게시글 삭제 API
    route.delete('/contents/:boardIdx', jwtMiddleware, board.deleteContents);
};