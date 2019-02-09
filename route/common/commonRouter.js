/* 
    공통 라우팅
*/
var express = require('express');
var router = express.Router();

router.get('/404', function (req, res) {    
    console.log("404!!!");
    res.redirect('./404.html');
});

module.exports = router;