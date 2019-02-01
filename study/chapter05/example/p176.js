/* 
    p.176 express-error-handler 미들웨어로 오류 페이지 보내기
    npm install express-error-handler --save
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

router.route('/process/login',static(path.join(__dirname, 'public'))).post(function(req,res){
    console.log('/process/login');
    var paramId = req.body.inId;
    var paramPw = req.body.inPw;
    console.log('id >> ', paramId +'\npw >> ', paramPw);
    res.writeHead('200',{'Content-Type':'text/html; charset=utf8'});
    res.write(paramId+'님 로그인 완료되었습니다.');
    res.end();
});

app.use('/',router);

var expressErrorHandler = require('express-error-handler');

var errorHandler = expressErrorHandler({
    static : {
        '404' : './error/404.html'
    }
});

app.use(expressErrorHandler.httpError(404));
app.use(errorHandler);
