var express = require('express');
var app = express();
var serveStatic = require('serve-static');
var os  = require('os');
var path = require('path');
var port = process.env.PORT || 5000;

var server = app.listen(port,function(){
    console.log("★★★ Server Started ★★★");
});

app.use(serveStatic(path.join(__dirname,'/release')));

app.get('/', function(req,res){
    res.redirect('./index.html');
});

app.get('/404', function (req, res) {    
    console.log("404!!!");
    res.redirect('./404.html');
});

app.get('/auth', function(req,res){
    res.redirect('./auth.html');
});

module.exports = app;