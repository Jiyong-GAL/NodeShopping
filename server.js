var express = require('express');
var app = express();
var serveStatic = require('serve-static');
var os  = require('os');
var path = require('path');
var port = process.env.PORT || 5000;
var db = require('./mongo');
var test = require('./testSchema');
var schema = require('./schema/common/commonSchema');

var server = app.listen(port,function(){
    console.log("★★★ Server Started ★★★");
    app.use(serveStatic(path.join(__dirname,'/release')));
});

app.get('/', function(req,res){
    // db접속 ip 시간 기록
    console.log("★★★ get(/) ★★★");
    var ipAddress;
    var forwardedIpsStr = req.header('x-forwarded-for');
        if(forwardedIpsStr){
            var forwardedIps = forwardedIpsStr.split(',');
            ipAddress = forwardedIps[0];
        }else{
            ipAddress = req.connection.remoteAddress;
        }
    var ipAddress = req.connection.remoteAddress;
    console.log("IP >>> ",ipAddress);
    test.create({
            connectIP:ipAddress
            ,connectTime:new Date()
    });
    schema.create({
        workSection: 'PRODUCT' // 업무 구분 PRODUCT(상품) ORDER(주문) MEMBER(회원)
       ,workDetailCode: 'PM' // 업무 상세코드 PM(상품관리) OM(주문관리) MM(회원관리)
       ,firstWriteDate: new Date() // 최초작성일
       ,subSchema:{ // 업무별 하위 스키마
            test : 'test'
       }
    });
    console.log(schema);
    res.redirect('./auth.html');
});

app.get('/404', function (req, res) {    
    console.log("404!!!");
    res.redirect('./404.html');
});

app.get('/auth', function(req,res){
    res.redirect('./auth.html');
});

module.exports = app;