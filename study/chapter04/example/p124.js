var output ='버퍼 테스트1';
var buffer1 = new Buffer(20);
var buffer2 = new Buffer('버퍼 테스트2','utf8');
var len = buffer1.write(output,'utf8');

console.log('첫번째 버퍼 >> ',buffer1.toString());
console.log('두번째 버퍼 >> ',buffer2.toString());

var byteLen = Buffer.byteLength(output);
// var str1 = buffer1.toString('utf8',0,byteLen);
// var str2 = buffer2.toString('utf8');
// console.log('str1 = ',str1, 'str2 = ', str2);

buffer1.copy(buffer2,0,0,len);
console.log('버퍼1 => 버퍼2 복사 >> ', buffer2.toString('utf8'));

var buffer3 = Buffer.concat([buffer1,buffer2]);
console.log('버퍼 합친 후 >> ', buffer3.toString('utf8'));
