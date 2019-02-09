/* 
    p.311 db 사용 예
*/

var mongoose = require('mongoose');

var database = {};

database.init = function(app, config){
    connect(app, config);
};

function connect(app, config) {
    console.log('connect() 호출');
}

function createSchema(app, config){
    for(var i=0; i<config.db_schemas.length; i++){
        var curSchema = require(curItem.file).createSchema(mongoose);

        var curModel = mongoose.model(curItem.collection, curSchema);

        database[curItem.schemaName] = curSchema;
        database[curItem.modelName] = curModel;
        
    }
    app.set('database',database);
}

module.exports = database;