var mongoose = require('mongoose');
var testSchema = new mongoose.Schema({
    connectIP:{
         type : String
        ,required :true
    }
    ,connectTime:String
});

mongoose.model('test2',testSchema);

module.exports = mongoose.model('test2');