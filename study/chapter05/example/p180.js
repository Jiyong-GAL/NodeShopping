/* 
    p.180 cookie-parser 미들웨어를 이용한 쿠키 이용
    npm install cookie-parser --save
*/
var express = require('express')
    , path  = require('path');
var bodyParser = require('body-parser')
   ,static = require('serve-static');
var app = express();

app.set('port', process.env.PORT || 4030);
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use(static(path.join(__dirname, 'public')));
var server = app.listen(app.get('port'),function(){
    console.log("★★★ Server Started ... port >>>",app.get('port')," ★★★");
});

var router = express.Router();

var cookieParser = require('cookie-parser');
app.use(cookieParser());

router.route('/process/login',static(path.join(__dirname, 'public'))).post(function(req,res){
    console.log('/process/login');
    var paramId = req.body.inId;
    var paramPw = req.body.inPw;
    console.log('id >> ', paramId +'\npw >> ', paramPw);
    // 쿠키설정
    res.cookie('user',{
        id : paramId
        , name : '혜웅'
        , authorized : true
    });

    res.redirect('/process/cookieShow');
    
});

router.route('/process/cookieShow').get(function(req,res){
    console.log('cookies \n',req.cookies);
    res.writeHead('200',{'Content-Type':'text/html; charset=utf8'});
    res.write(req.cookies.user.id+'님 로그인 완료되었습니다.');
    // 쿠키 삭제
    // res.clearCookie('user');
    res.end();
});

app.use('/',router);

