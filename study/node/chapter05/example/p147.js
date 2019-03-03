/* 
    p147. 다른 웹사이트의 데이터를 가져와 응답
*/

var http = require('http');

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

    var options={
        host : 'www.google.com',
        port : 80,
        path : '/'
    };
    
    var resData = '';

    var request = http.get(options, function(response){
    // req = http.get(options, function(response){
        // 응답처리
        response.on('data',function(chunk){
            resData += chunk;
        });
    

        response.on('end',function(){
            console.log('google end()');
            res.writeHead(200, {"Content-Type":'text/html'});
            res.end(resData);
        });
    });
    console.log('resData == ', resData);
    request.on('error',function(err){
        console.log('오류 발생 \n',err.message);
    });
});


