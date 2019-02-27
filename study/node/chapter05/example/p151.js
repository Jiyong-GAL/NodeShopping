/* 
    p151. Express Server
*/

var express = require('express')
    ,http   = require('http');

// express 객체생성
var app = express();

// 기본 포트를 app 객체 속성으로 설정
app.set('port', process.env.PORT || 3050);

// express 서버 시작
http.createServer(app).listen(app.get('port'),function(){
    console.log('express server started... ');
});

// var server = app.listen(port,function(){
//     console.log("★★★ Server Started ★★★");
//     app.use(serveStatic(path.join(__dirname,'/release')));
// });