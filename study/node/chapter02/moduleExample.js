//os 모듈

var os = require('os');
 
console.log('hostname: ' + os.hostname());
console.log('type: ' + os.type());
console.log('platform: ' + os.platform());
console.log('arch: ' + os.arch());
console.log('release : ' + os.release());
console.log('uptime: ' + os.uptime());
console.log('totalmem: ' + os.totalmem());
console.log('freemem: ' + os.freemem());
console.log('cpus: ' + os.cpus());
console.log('getNetworkInterfaces: ' + os.getNetworkInterfaces());


//path 모듈

var path = require('path');
//디렉토리 이름 합치기
var directories = ["users", "mike", "docs"];
var docsDirectory = directories.join(path.sep);
console.log('문서 디렉토리 : %s', docsDirectory);
//디렉토리 이름과 파일 이름 합치기
var curPath = path.join('/Users/mike', 'notepad.exe');
console.log('파일패스 : %s', curPath);
//패스에서 디렉토리, 파일이름, 확장자 구별하기
var filename = "C:\\Users\\mike\\noetpad.exe";
var dirname = path.dirname(filename);
var basename = path.basename(filename);
var extname = path.extname(filename);
console.log('디렉터리 : %s, 파일 이름 : %s, 확장자 : %s', dirname, basename, extname);



//url 모듈
// - parse(urlStr, [, parseQueryString = false, slashesDenoteHost = false]) : URL 문자열을 URL 객체로 변환해 리턴합니다.
// - format(urlObj) : URL 객체를 URL 문자열로 변환해 리턴합니다.
// - resolve(from, to) : 매개 변수를 조합하여 완전한 URL 문자열을  생성하여 리턴합니다.

var url =require('url'); 
var parsedObj = url.parse('http://www.naver.com');
console.log(parsedObj);


//Quersy String 모듈
// - stringify(obj[, sep = '&', eq = '=']) : 쿼리 객체를 쿼리 문자열로 변환하여 리턴합니다.
//  - parse(str[, ep = '&', eq = '=']) : 쿼리 문자열을 쿼리 객체로 변환해 리턴합니다.

var url = require('url');
var queryString = require('querystring');
 
var parsedObj = url.parse('http://search.naver.com/search.naver?where=nexearch&query=%EA%B8%B0%EC%84%B1%EC%9A%A9&sm=top_hty&fbm=1&ie=utf8');
console.log(queryString.parse(parsedObj.query));
