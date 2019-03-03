/*
* p.110 url모듈 관련 예제
*/
// 주소문자열을 URL 객체로 반환
var url = require('url');

var curUrl = url.parse('https://search.naver.com/search.naver?sm=top_hty&fbm=0&ie=utf8&query=%EA%B0%9C%EB%B0%9C%EC%9E%90');
var curStr = url.format(curUrl);

console.log('주소 문자열 \n',curStr);
console.log('URL \n',curUrl);

/* 
   p.111 요청파라미터 확인 
*/
var queryString = require('querystring');
var param = queryString.parse(curUrl.query);

console.log('요청 파라미터 원본 \n',queryString.stringify(param));
console.log('query \n',param.query);