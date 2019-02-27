var p287 = require('./p287');

function showUser(){
    return p287.getUser().name +', '+p287.group.name;
}

console.log('사용자 정보 : '+showUser());