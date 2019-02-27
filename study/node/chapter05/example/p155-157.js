/* 
    p155-157. 미들웨어 사용
*/
var express = require('express');
var app =express();
var port = process.env.PORT || 3030;

var server = app.listen(port,function(){
    console.log("★★★ Server Started ... port >>>",port," ★★★");
});

app.use('/test',function(req, res, next){
    console.log('미들웨어1 ');
    req.user='혜웅';
    // res.writeHead('200',{'Content-Type':'text/html;charset=utf8'});
    // res.end('<h1>미들웨어 1 응답</h1>');
    next();
});

app.use(function(req, res, next){
    console.log('미들웨어 2');
    
    res.writeHead('200',{'Content-Type':'text/html;charset=utf8'});
    res.end('<h2>'+req.user+' 미들웨어 2 응답</h2>');
});