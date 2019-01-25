/* 
    p.126 파일을 읽고 쓰기위한 스트림
*/

var fs = require('fs');

var inName = '../output/writeTest.txt';
var outName = '../output/streamTest.txt';

fs.exists(outName, function(exits){
    // 기존에 파일이 존재하면 삭제
    if(exits){ 
        fs.unlink(outName,function(err){
            if(err) throw err;
            console.log('기존파일 삭제');
        });
    }
    var inFile = fs.createReadStream(inName, {flags:'r'});
    var outFile = fs.createWriteStream(outName, {flags:'w'});
    inFile.pipe(outFile);
    console.log('inFile => outFile 복사');
});
