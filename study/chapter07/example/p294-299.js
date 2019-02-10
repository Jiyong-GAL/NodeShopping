/* 
    p.294-299 모듈을 분리할 떄 사용하는 전형적인 코드 패턴
*/

/* 
    함수를 할당하는 코드 패턴(p294)
*/
exports.printUser = function(){
    console.log('user name = 홍길동');
};
// 사용법
// require('./p294-299').printUser;
///////////////////////////////////////////////////////////////////////////////////////////////

/* 
    인스턴스 객체를 할당하는 코드 패턴(p295-297)
*/
function User(id, name){
    this.id = id;
    this.name = name;
}

User.prototype.getUser = function(){
    return {
        id:this.id,
        name:this.name
    };
};

User.prototype.group = {
    id : 'group01'
    ,name : '친구'
};

module.exports = new User('test01', '홍길동');

// 사용법
/* 
    var user = require('./p294-299').User;
    user.getUser();
*/

///////////////////////////////////////////////////////////////////////////////////////////////
/* 
    프로토타입 객체를 할당하는 코드 패턴(p297-299)
*/
function User(id, name){
    this.id = id;
    this.name = name;
}

User.prototype.getUser = function(){
    return {
        id:this.id,
        name:this.name
    };
};

User.prototype.group = {
    id : 'group01'
    ,name : '친구'
};

User.prototype.printUser = function(){
    console.log('user === ', this.name, 'group name === ',this.group.name);
}

module.exports = User;

// 사용법
/* 
    var User = require('./p294-299');
    var user = new User('test01','홍길동');
    user.printUser();
*/