/* 
    p.183 express-session 모듈을 이용한 세션 이용
    npm install express-session --save
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
var expressSession = require('express-session');

// 세션설정
app.use(expressSession({
    key: 'sid' // 세션키
    ,secret: 'secret' // 비밀키
    ,cookie: {
        maxAge: 1000 * 60 * 60 // 쿠키 유효기간 1시간
    }
}));

router.route('/process/login',static(path.join(__dirname, 'public'))).post(function(req,res){
    console.log('/process/login');
    var paramId = req.body.inId;
    var paramPw = req.body.inPw;
    console.log('id >> ', paramId +'\npw >> ', paramPw);

    req.session.user = {
        id : paramId
        , name : '혜웅'
        , authorized : true
    };
    
    res.redirect('/process/sessionShow');
});

router.route('/process/sessionShow').get(function(req,res){
    console.log('session \n',req.session);
    res.writeHead('200',{'Content-Type':'text/html; charset=utf8'});
    res.write(req.session.user.id+'님 로그인 완료되었습니다.');
    // 세션 삭제
    // req.session.destory(function(){
    //     if(err) throw err;
    //     console.log('세션삭제');
    // });  
    // 쿠키도 함께 삭제해줘야 쿠키에 저장된 세션정보로 인해 문제가 발생하지 않음
    // res.clearCookie('user'); 
    res.end();
});

app.use('/',router);

