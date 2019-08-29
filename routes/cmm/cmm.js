var express = require('express');
var router = express.Router();

/**
* BaseUrl : web.js router에 선언한 BaseUrl을 표시. request url을 쉽게 파악하기 위함
*  : /cmm
*/

/**
* 실제 업무처리 로직이 명시된 router import
*/
var lottoList = require('./lottoList');    //클럽목록

router.get('/', function (req, res) {
    res.send('cmm main');
});

/* lottoList  */
router.get('/list', function (req, res) {
    lottoList.list(req, res);
});


router.get('/jquery', function (req, res) {
    res.render('cmm/jquery');
});



module.exports = router;
