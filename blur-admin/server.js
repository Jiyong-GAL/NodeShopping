var app = require('./app');
var port = process.env.PORT || 3030;

var server = app.listen(port,function(){
    console.log("★★★ Server Started ★★★");
});
