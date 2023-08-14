const express = require('express');
const compression = require('compression');
const methodOverride = require('method-override');
var cors = require('cors');
module.exports = function () {
    const app = express();

    app.use(compression());

    app.use(express.json());

    app.use(express.urlencoded({extended: true}));

    app.use(methodOverride());

    app.use(cors());

    // TODO: 도메인을 추가할 경우 이곳에 Route를 추가하세요.
    require('../src/User/userRoute')(app);
    return app;
};