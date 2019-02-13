/* 
    p.123 파일 읽어서 쓰기
*/
var fs = require('fs');

// 파일열기
fs.open('../output/writeTest.txt','r',function(err, fd){
    if(err) throw err;

    var buf = new Buffer(10);
    console.log('버퍼 타입 >> ',typeof(buf));
    console.log('버퍼 타입 >> ',Buffer.isBuffer(buf));

    // 파일 읽기
    fs.read(fd, buf, 0, buf.length, null, function(err, bytesRead, buffer){
        if(err) throw err;

        var inStr = buffer.toString('utf-8',0,bytesRead);

        console.log('파일에서 읽은 데이터 >>> \n',inStr);

        fs.close(fd,function(){
            console.log('파일 닫기');
        });

    });
});
