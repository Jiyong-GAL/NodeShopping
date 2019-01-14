var express = require('express');
var app = express();

app.get('/expressTest', function (req, res) {    
    console.log("expressTest!!!");
});

module.exports = app;