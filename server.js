var express = require('express');
var app = express();
var serveStatic = require('serve-static');
var path = require('path');
var port = process.env.PORT || 5000;
var db = require('./mongo');
/* 
router module
*/
var commonRouter = require('./route/common/commonRouter');
var connectionRouter = require('./route/connection/connectionRouter');
var userRouter = require('./route/user/userRouter');

var server = app.listen(port,function(){
    console.log("★★★ Server Started ★★★");
    app.use(serveStatic(path.join(__dirname,'/release')));
});

app.use('/',commonRouter);
app.use('/',connectionRouter);
app.use('/',userRouter);
// error handler
// var expressErrorHandler = require('express-error-handler');
// var errorHandler = expressErrorHandler({
    //     static : {
        //         '404' : './release/404.html'
        //     }
        // });
        // app.use(expressErrorHandler.httpError(404));
        // app.use(errorHandler);
        
module.exports = app;