/* 
    p.138 클라이언트 요청 이벤트 처리
*/

var http = require('http');
var fs =require('fs');

// 웹 서버 객체 만들기
var server = http.createServer();

// 3000번 포트로 서버를 시작 하고 대기
var port = 3030;
server.listen(port, function(){
    console.log("★★★★★★★ SERVER STARTED ★★★★★★★ \n PORT === %d",port);
});

// 클라이언트 연결 이벤트 처리
server.on('connection', function(socket){
    var ipAddress = socket.address();
    console.log('★★★ client 접속 ★★★ \n ip ==== %s',ipAddress);
});

// 클라이언트 요청 이벤트 처리
server.on('request', function(req, res){
    console.log('★★★ client 요청 ★★★ ');
    //console.dir(req);
    fs.readFile('./hello.html',function(err,data){
        if(err){
            console.log('파일 읽기 실패');
        }else{
            res.writeHead(200, {"Content-Type":'text/html'});
            res.end(data);
        }
    });
});

// 서버 종료 이벤트
server.on('close',function(){
    console.log("★★★★★★★ SERVER ENDED ★★★★★★★ ");
});