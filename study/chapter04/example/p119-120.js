/* 
    p119~120.파일 다루기
*/
var fs = require('fs');

fs.writeFile('../output/writeTest.txt','File Write Test!!!! ',function(err){
    if(err){
        console.log('파일쓰기 오류\n',err);
    }else{
        console.log('파일쓰기 완료');
    }
});

fs.readFile('../output/writeTest.txt','utf-8',function(err,data){
    if(err){
        console.log('파일 읽기 오류\n',err);
    }else{
        console.log('읽어온 데이터 \n',data);
    }
})