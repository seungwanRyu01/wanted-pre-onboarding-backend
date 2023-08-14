module.exports = {

    // Success
    SUCCESS : { "isSuccess": true, "code": 1000, "message":"성공" },

    // Common
    TOKEN_EMPTY : { "isSuccess": false, "code": 2000, "message":"JWT 토큰을 입력해주세요." },
    TOKEN_VERIFICATION_FAILURE : { "isSuccess": false, "code": 3000, "message":"JWT 토큰 검증 실패" },
    TOKEN_VERIFICATION_SUCCESS : { "isSuccess": true, "code": 1001, "message":"JWT 토큰 검증 성공" }, // ?

    //Request error
    SIGNUP_EMAIL_EMPTY : { "isSuccess": false, "code": 2001, "message":"이메일을 올바르게 입력해주세요" },
    SIGNUP_EMAIL_LENGTH : { "isSuccess": false, "code": 2002, "message":"이메일은 30자리 미만으로 입력해주세요." },
    SIGNUP_EMAIL_ERROR_TYPE : { "isSuccess": false, "code": 2003, "message":"이메일을 형식을 정확하게 입력해주세요." },
    SIGNUP_PASSWORD_EMPTY : { "isSuccess": false, "code": 2004, "message": "비밀번호를 입력 해주세요." },
    SIGNUP_PASSWORD_LENGTH : { "isSuccess": false, "code": 2005, "message":"영문/숫자/특수문자 2가지 이상 조합(8~20자)를 지켜주세요"},
    SIGNUP_PASSWORD_SEQUENCE : { "isSuccess": false, "code": 2006, "message":"3개 이상 연속되거나 동일한 문자/숫자 제외"},
    SIGNUP_PASSWORD_SAME_ID : { "isSuccess": false, "code": 2007, "message":"아이디(이메일 제외)"},

    SIGNUP_NAME_EMPTY : { "isSuccess": false, "code": 2008, "message": "이름을 입력해주세요."},
    SIGNUP_NAME_LENGTH : { "isSuccess" : false, "code": 2009, "message": "이름을 정확히 입력해주세요. "},
    SIGNUP_PHONENUM_EMPTY : {"isSuccess": false, "code": 2010, "message": "휴대폰 번호를 입력해주세요. "},
    SIGNUP_PHONENUM_LENGTH : {"isSuccess": false, "code": 2011, "message": "휴대폰 번호 형식을 확인해주세요. "},

    SIGNIN_EMAIL_EMPTY : { "isSuccess": false, "code": 2012, "message":"이메일을 입력해주세요" },
    SIGNIN_EMAIL_LENGTH : { "isSuccess": false, "code": 2013, "message":"이메일은 30자리 미만으로 입력해주세요." },
    SIGNIN_EMAIL_ERROR_TYPE : { "isSuccess": false, "code": 2014, "message":"이메일을 형식을 정확하게 입력해주세요." },
    SIGNIN_PASSWORD_EMPTY : { "isSuccess": false, "code": 2015, "message": "비밀번호 정보를 입력 해주세요." },

    USER_USERID_EMPTY : { "isSuccess": false, "code": 2016, "message": "userId를 입력해주세요." },
    USER_USERID_NOT_EXIST : { "isSuccess": false, "code": 2017, "message": "해당 회원이 존재하지 않습니다." },

    USER_USEREMAIL_EMPTY : { "isSuccess": false, "code": 2018, "message": "이메일을 입력해주세요." },
    USER_USEREMAIL_NOT_EXIST : { "isSuccess": false, "code": 2019, "message": "해당 이메일을 가진 회원이 존재하지 않습니다." },
    USER_ID_NOT_MATCH : { "isSuccess": false, "code": 2020, "message": "사용자 아이디 값을 확인해주세요" },
    USER_PHONENUM_EMPTY : { "isSuccess": false, "code": 2021, "message": "변경할 닉네임 값을 입력해주세요" },

    USER_STATUS_EMPTY : { "isSuccess": false, "code": 2022, "message": "회원 상태값을 입력해주세요" },


    // Response error
    SIGNUP_REDUNDANT_EMAIL : { "isSuccess": false, "code": 3001, "message":"이미 가입된 이메일 주소입니다. 다른 이메일을 입력하여 주세요." },
    SIGNUP_REDUNDANT_PHONENUM : { "isSuccess": false, "code": 3002, "message":"이미 가입된 휴대폰 번호입니다." },

    SIGNIN_EMAIL_WRONG : { "isSuccess": false, "code": 3003, "message": "아이디가 잘못 되었습니다." },
    SIGNIN_PASSWORD_WRONG : { "isSuccess": false, "code": 3004, "message": "비밀번호가 잘못 되었습니다." },
    SIGNIN_INACTIVE_ACCOUNT : { "isSuccess": false, "code": 3005, "message": "비활성화 된 계정입니다. 고객센터에 문의해주세요." },
    SIGNIN_WITHDRAWAL_ACCOUNT : { "isSuccess": false, "code": 3006, "message": "탈퇴 된 계정입니다. 고객센터에 문의해주세요." },

    REDUNDANT_EMAIL : { "isSuccess": false, "code": 3007, "message":"이미 존재하는 이메일입니다." },
    REDUNDANT_PHONENUM : { "isSuccess": false, "code": 3008, "message":"이미 존재하는 휴대폰 번호입니다." },
    REDUNDANT_BEFORE_PASSWORD : { "isSuccess": false, "code": 3009, "message":"변경 전의 패스워드와 동일합니다." },


    //Connection, Transaction 등의 서버 오류
    DB_ERROR : { "isSuccess": false, "code": 4000, "message": "데이터 베이스 에러"},
    SERVER_ERROR : { "isSuccess": false, "code": 4001, "message": "서버 에러"},
}