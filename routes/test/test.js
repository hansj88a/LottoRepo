var express = require('express');
var router = express.Router();


/**
* BaseUrl : web.js router에 선언한 BaseUrl을 표시. request url을 쉽게 파악하기 위함
*  : /test
*/

router.get('/', function (req, res) {
    res.render('test/test',{title:'test'});
});

module.exports = router;
