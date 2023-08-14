module.exports = function (route) {
    const user = require('./userController');

    // 1. 유저 생성 (회원가입) API
    route.post('/users', user.postUsers);

    // 2. 로그인 API
    route.post('/login', user.login);
}