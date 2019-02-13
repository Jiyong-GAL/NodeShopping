/* 
    p.301 스키마 예제(user_schema)
*/

var crypto =require('crypto');

var Schema = {};

Schema.createSchema = function(mongoose){
    // 스키마 정의
    var UserSchema = mongoose.Schema({
        id : {type:String, required:true, unique:true, default:''}
        ,name : {type:String, index : 'hashed', default:''}
    });

    return UserSchema;
}

module.exports = Schema;