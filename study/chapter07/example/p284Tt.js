var p284 = require('./p284');

function showUser(){
    return p284.getUser().name +', '+p284.group.name;
}

console.log('사용자 정보 : '+showUser());