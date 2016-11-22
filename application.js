'use strict';

const express = require('express');
const app = express();
let swig = require('swig');
let bodyParser = require('body-parser');

app.use( '/public', express.static('./www/public') );

app.use( bodyParser.urlencoded({extended: true}) );

app.engine('html', swig.renderFile);
app.set('view engine', 'html');
app.set('views', './views');
swig.setDefaults({cache: false});

app.use('/admin', require('./modules/admin.js') );
app.use('/api/admin', require('./modules/api_admin.js') );
app.use('/api', require('./modules/api.js') );
app.use('/', require('./modules/main.js') );

app.listen(8888, function() {
    console.log('服务器开启成功');
    console.log('http://localhost:8888');
});