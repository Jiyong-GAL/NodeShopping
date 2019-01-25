var fs = require('fs');
var logger = require('./p129');
fs.mkdir('../test1',0666,function(err){
    if(err) throw err;
    logger.debug('/test1 디렉토리 생성');
});

// 5초후 test2 디렉토리 생성 후 test1 디렉토리 삭제
setTimeout(function(){
    fs.mkdir('../test2',0666,function(err){
        // if(err) throw err;
        if(err) logger.error(err);
        // console.log('/test2 디렉토리 생성');
        logger.debug('/test2 디렉토리 생성');
        
        fs.rmdir('../test1',function(err){
            // if(err) throw err;
            if(err) logger.error(err);
            logger.debug('test1/ 디렉토리 삭제');
        });
    });
},5000);