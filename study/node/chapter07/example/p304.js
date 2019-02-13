/* 
    p.304 사용자 처리 함수를 별도의 모듈 파일로 분리
*/
var login = function(req, res){
    console.log('login 함수 호출');
}
var logout = function(req, res){
    console.log('logout 함수 호출');
}

module.exports.login = login;
module.exports.logout = logout;
