/* 
    p.167 body-parser 미들웨어 예제
*/

var express = require('express')
    , path  = require('path');

var bodyParser = require('body-parser')
   ,static = require('serve-static');

var app = express();

app.set('port', process.env.PORT || 4030);

var server = app.listen(app.get('port'),function(){
    console.log("★★★ Server Started ... port >>>",app.get('port')," ★★★");
});

// body-parser를 이용해 application/x-www-form-urlencoded 파싱
app.use(bodyParser.urlencoded({extended:false}));

// body-parser를 사용해 application/json 파싱
app.use(bodyParser.json());
app.use(static(path.join(__dirname, 'public')));
// app.use('/login',static(path.join(__dirname, 'public')),function(req,res,next){
//     res.redirect('./login.html');
//     next();
// });

app.post('/login',static(path.join(__dirname, 'public')),function(req,res){
    var paramId = req.body.inId;
    var paramPw = req.body.inPw;
    console.log('id >> ', paramId +'\npw >> ', paramPw);
    res.writeHead('200',{'Content-Type':'text/html; charset=utf8'});
    res.write(paramId+'님 로그인 완료되었습니다.');
    res.end();
});



