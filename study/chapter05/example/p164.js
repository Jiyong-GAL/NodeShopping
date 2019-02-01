/* 
    p.164 static 미들웨어
*/
// npm install -g serve-static --save

var static = require('serve-static');
var express = require('express');
var path = require('path');
var app = express();
var port = process.env.PORT || 3030;

var server = app.listen(port,function(){
    console.log("★★★ Server Started ... port >>>",port," ★★★");
});

app.use('/public', static(path.join(__dirname,'public')),function(req,res){
    res.redirect('./staticTest.html');
});

