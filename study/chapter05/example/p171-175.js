/* 
    p.171 요청라우팅
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
/* 
    p175. 오류페이지 보여주기
*/
app.all('*',function(req, res){
    res.status(404).send('<h3>해당 페이지를 찾을 수 없습니다.</h3>');
});