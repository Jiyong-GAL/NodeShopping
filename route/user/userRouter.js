/* 
    user 라우팅
*/
var express = require('express');
var router = express.Router();
var app = require('../../server');
var schema = require('../../schema/common/commonSchema');

router.get('/', function(req,res){
    console.log('router.get("/")');
    schema.create({
        workSection: 'PRODUCT' // 업무 구분 PRODUCT(상품) ORDER(주문) MEMBER(회원)
        ,workDetailCode: 'PM' // 업무 상세코드 PM(상품관리) OM(주문관리) MM(회원관리)
        ,firstWriteDate: new Date() // 최초작성일
        ,subSchema:{ // 업무별 하위 스키마
            test : 'test'
        }
    });
    res.redirect('./auth.html');
});


module.exports = router;