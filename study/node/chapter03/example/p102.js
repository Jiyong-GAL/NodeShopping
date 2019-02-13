/* 
    p102.프로토타입 객체 얘제
*/

function Person(name, age){
    this.name = name;
    this.age = age;
}

Person.prototype.walk = function(speed){
    // console.log(speed+'속도로 걷는중');
    return speed;
}

var per1 = new Person('소녀시대',20);
var per2 = new Person('걸스데이',22);

console.log(per1.name + '의 걸음속도는 ',per1.walk(10));
