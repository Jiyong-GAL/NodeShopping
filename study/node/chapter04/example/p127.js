/* 
    p.127 http모듈로 요청받은 파일내용을 읽고 응답하기
*/

var fs = require('fs');
var http = require('http');

var server = http.createServer(function(req, res){
    var inStream = fs.createReadStream('../output/streamTest.txt');
    inStream.pipe(res);
});

server.listen(7001,'127.0.0.1',function(){
    console.log('SERVER STARTED');
});