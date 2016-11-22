'use strict';

const express = require('express');
let router = express.Router();

router.post('/login', function(req, res) {
    let username = req.body.username || '';
    let password = req.body.password || '';

    if (username == '') {
        res.send({
            error: 1,
            message: '用户名不能为空'
        });
        return;
    }

    if (password == '') {
        res.send({
            error: 2,
            message: '密码不能为空'
        });
        return;
    }

    let Admin = require('../models/admin');
    if ( Admin.login(username, password) ) {
        res.send({
            error: 0,
            message: '登录成功'
        });
    } else {
        res.send({
            error: 3,
            message: '登录失败，用户名或密码错误'
        });
    }
});

module.exports = router;