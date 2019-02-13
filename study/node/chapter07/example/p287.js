/* 
    p.287 module.exports로 객체 모듈화
*/

var user ={
    getUser : function(){
        return {
            id :'test01'
            ,name : '홍길동'
        };
    },
    group : {
        id : 'group01'
        ,name : '친구'
    }
}

module.exports = user;