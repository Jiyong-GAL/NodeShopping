var express = require('express');
var app = express();
var serveStatic = require('serve-static');
var os  = require('os');
var path = require('path');
var logger = require('./logger');

app.use(serveStatic(path.join(__dirname,'/src')));

app.get('/', function(req,res){
    //res.redirect('./index.html');
    logger.info("s");
});

app.get('/expressTest', function (req, res) {    
    console.log("expressTest!!!");
});

module.exports = app;