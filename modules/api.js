'use strict';

const express = require('express');
let router = express.Router();

router.get('/', function(req, res) {
    res.send('后台首页');
});

router.get('/login', function(req, res) {
    res.render('login');
});

module.exports = router;