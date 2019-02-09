/* 
    connection 관련 라우팅
*/
var express = require('express');
var router = express.Router();
var test = require('../../testSchema');

router.get('/connection', function(req,res){
    // db접속 ip 시간 기록
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

});


module.exports = router;