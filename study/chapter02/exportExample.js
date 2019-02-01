// p70 ~ 71

//require() 함수에 전달하는 모듈의 이름은 require('./calc')처럼 지정하면 calc.js 파일을 찾아보고
//파일이 없는 경우에는 calc폴더가 있는지 확인하고 만약 calc 폴더가 있다면 그 안에 있는 indexjs파일 을 불러들인다.

var calc = require('./calc');
console.log('모듈로 분리한 후 - calc.add 함수 호출 결과 : %d', calc.add(10, 10));