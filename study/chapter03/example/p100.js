/* 
    p100. 콜백함수
*/

function myCallback(result){
    console.log('myCallback()', result);
}

var add = function(a,b,callback){
    callback(a+b);
};

// 미리 만들어 놓은 콜백 이용
add(30,40,myCallback);

// 익명함수 이용
add(10,20,function(result){
    console.log('익명함수 이용', result);
});

