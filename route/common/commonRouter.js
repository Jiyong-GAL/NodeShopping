/* 
    공통 라우팅
*/
var express = require('express');
var router = express.Router();

router.get('/404', function (req, res) {    
    console.log("404!!!");

    console.log("name ===\n",req.name);
    console.log("job ===\n",req.job);

    res.redirect('./404.html');
});
module.exports = router;