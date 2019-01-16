var mongoose = require('mongoose');

var db = mongoose.connection;
db.on('error', console.error);
db.once('open', function(){
    console.log("Connected to mongodb server");
});
// connection info input
mongoose.connect('mongodb://localhost:27017/test');
