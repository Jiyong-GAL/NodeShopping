var mongoose = require('mongoose');

var db = mongoose.connection;
db.on('error', console.error);
db.once('open', function(){
    console.log("Connected to mongodb server");
});

mongoose.connect('mongodb://ShoppingManager:manager1029@ds054619.mlab.com:54619/node-shopping');
// mongoose.connect('mongodb://localhost:27017/test');
