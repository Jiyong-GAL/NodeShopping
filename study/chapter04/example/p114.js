/* 
p114. 이벤트 예제
 */

 process.on('exit',function(){
     console.log('exit 이벤트 발생');
 });

setTimeout(function(){
    console.log('3초 후 시스템 종료');
    process.exit();
},3000);

console.log('==========================================================================');

process.once('tick',function(count){
    console.log('tick 이벤트 발생 ',count);
});

setTimeout(function(){
    console.log('2초후에 tick 이벤트 전달 시도');
    process.emit('tick','5'); // once메소드로 넘겨줬기때문에 전달되지않음
},2000);

process.emit('tick','1');
