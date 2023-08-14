module.exports = {
    // Success
    SUCCESS : { "isSuccess": true, "code": 1000, "message":"성공" },
    TOKEN_VERIFICATION_SUCCESS : { "isSuccess": true, "code": 1001, "message":"JWT 토큰 검증 성공" },
    REGISTER_SUCCESS : { "isSuccess": true, "code": 1002, "message":"회원가입 성공" },
    LOGIN_SUCCESS : { "isSuccess": true, "code": 1003, "message":"로그인 성공" },

    // Common
    TOKEN_EMPTY : { "isSuccess": false, "code": 2000, "message":"JWT 토큰을 입력해주세요." },
    TOKEN_VERIFICATION_FAILURE : { "isSuccess": false, "code": 3000, "message":"JWT 토큰 검증 실패" },

    //Request error
    SIGN_EMAIL_EMPTY : { "isSuccess": false, "code": 2001, "message":"이메일을 입력해주세요." },
    SIGN_EMAIL_ERROR_TYPE : { "isSuccess": false, "code": 2002, "message":"이메일에 '@'를 포함해주세요." },
    SIGN_PASSWORD_EMPTY : { "isSuccess": false, "code": 2003, "message": "비밀번호를 입력해주세요." },
    SIGN_PASSWORD_LENGTH : { "isSuccess": false, "code": 2004, "message":"비밀번호는 최소 8자리 이상 입력해주세요." },

    // Response error
    SIGNUP_REDUNDANT_EMAIL : { "isSuccess": false, "code": 3001, "message":"이미 가입된 이메일 주소입니다. 다른 이메일을 입력하여 주세요." },

    SIGNIN_EMAIL_WRONG : { "isSuccess": false, "code": 3002, "message": "이메일이 잘못 되었습니다." },
    SIGNIN_PASSWORD_WRONG : { "isSuccess": false, "code": 3003, "message": "비밀번호가 잘못 되었습니다." },

    //Connection, Transaction 등의 서버 오류
    DB_ERROR : { "isSuccess": false, "code": 4000, "message": "데이터 베이스 에러"},
    SERVER_ERROR : { "isSuccess": false, "code": 4001, "message": "서버 에러"},
}