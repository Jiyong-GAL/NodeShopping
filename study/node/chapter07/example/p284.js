/* 
    p.284 exports 객체로 모듈화
*/

// exports 객체 속성으로 함수 추가
exports.getUser = function(){
    return {
        name : '혜웅'
        ,job : 'none'
    };
};

// exports 객체 속성으로 객체 추가
exports.group = {
    id : 'group01'
    ,name : '친구'
};

/* 
    exports = {

    };
    의 형태로 할당하면 새로운 변수 exports로 인식하기때문에 사용 불가능
*/