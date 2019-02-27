/*
* p.83 변수로 자료형 알아보기 예제
*/

console.log("=====================================p83============================================");
var age = 26;
var name = "박혜웅";
var jobYn = false;

// var 키워드에 동일하게 담기때문에 typeof로 타입을 확인 할 수 있는 typeof함수를 제공함
console.log('나이 == ', age, '이름 == ', name);
console.log('나이 타입 == ',typeof(age), "이름 타입 == ",typeof(name));
console.log('직업 여부 == ',jobYn, "직업 여부 타입 == ",typeof(jobYn));

var undefinedT;
var nullT = null; 

// undefined과 null은 전혀 다른 존재이기 때문에 조건 분기 시 신경을 써야함
console.log("undefined == ",undefinedT);
console.log("null == ",nullT);

// 추가로 일치 연산자(===)는 값과 타입까지 비교한다
// 비교연산자로 값과 타입 비교
if(undefinedT==undefined && typeof(undefinedT)=='undefined'){
    console.log("일치연산자 테스트");
}
// 일치연산자로 값과 타입 비교
if(undefinedT===undefined){
    console.log("일치연산자 테스트");
}

/*
* p84. 객체 예제
*/
console.log("=====================================p84============================================");
var HyeUng = {};
HyeUng['age']=26;
HyeUng['name']='혜웅';
HyeUng.jobYn = false;
console.log(HyeUng.name+'의 나이는 ',HyeUng.age,'살이며', jobYn ? '취업':'미취업','상태이다');



