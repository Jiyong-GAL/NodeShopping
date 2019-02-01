/* 
    p.190 파일업로드 예제
    npm install multer --save
    npm install cors --save
*/
var express = require('express')
    , path  = require('path')
    , app = express()
    , bodyParser = require('body-parser')
    , static = require('serve-static');

var multer = require('multer');
var fs = require('fs');
var cors = require('cors'); // 클라이언트에서 ajax로 요청했을 때 CORS(다중 서버 접속) 지원

app.set('port', process.env.PORT || 4030);
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use(static(path.join(__dirname, 'public')));
app.use(static(path.join(__dirname, 'uploads')));

var server = app.listen(app.get('port'),function(){
    console.log("★★★ Server Started ... port >>>",app.get('port')," ★★★");
});

// 반드시 router 미들웨어 전에 사용 해야함
var storage = multer.diskStorage({
    destination : function(req,file,callback){
        callback(null, 'uploads')
    },
    filename: function(req, file ,callback){
        var fileInfo = new Array();
        var fileName = file.originalname;
        console.log('type >> ', typeof(file.originalname));
        fileInfo = fileName.split('.');
        callback(null, fileInfo[0] + '_' + Date.now()+'.'+fileInfo[1]);
    }
});

var upload = multer({
    storage : storage,
    limits:{
        files:10,
        fileSize:1024*1024*1024
    }
});

var router = express.Router();

router.route('/fileUpload').post(upload.array('inFile',1),function(req,res){
    console.log('/fileUpload');
    // 현재 파일 정보
    var originFileName = '',
        fileName = '',
        mimeType ='',
        size =0;
    try {
        var files =req.files;
        console.log("####################################################");
        console.log('파일 수 >> ',files.length);
        console.log("####################################################");
        if(Array.isArray(files)){
            for(var i=0; i<files.length; i++){
                originFileName = files[i].originalname,
                fileName = files[i].filename,
                mimeType =files[i].mimetype,
                size = files[i].size;
                console.log('업로드 파일 정보\noriginFileName>>',originFileName,'\nfileName>>',fileName,'\nmimeType>>',mimeType,'\nsize',size);
            }
        }else{

        }
        res.writeHead('200',{'Content-Type':'text/html; charset=utf8'});
        res.write('<h3>'+originFileName+' 파일 업로드 성공</h3>');
        res.end();
    } catch (error) {
        console.dir(error);
    }
});

app.use('/',router);

