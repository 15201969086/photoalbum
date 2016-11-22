'use strict';

const express = require('express');
let router = express.Router();

router.get('/', function(req, res) {
    res.send('首页');
});

router.get('/register', function(req, res) {
    res.send('注册');
});

router.get('/login', function(req, res) {
    res.send('登录');
});

module.exports = router;