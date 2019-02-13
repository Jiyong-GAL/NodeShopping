/* 
    p87. 함수형 변수 선언 예제
*/

// 일반 함수 선언 및 사용
function add1(a,b){
    return a+b;
}
console.log("10+20=",add1(10,20));

// 함수형 변수 선언 및 사용
// 함수형 변수는 일반적인 표현식이 되므로 세미콜론을 붙여주는게 좋음
var add2 = function(a,b){
    return a+b;
};

console.log('10+20=',add2(10,20));

// 객체에도 담아서 사용 가능
var myCalc = {
    add:function(a,b){
        return a+b;
    },mul:function(a,b){
        return a*b;
    },div:function(a,b){
        return a/b;
    }
}

console.log(myCalc.mul(10,7), myCalc.add(10,20));