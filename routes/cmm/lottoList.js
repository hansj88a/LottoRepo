
var mysql = require('mysql');
var path = require('path');

var dbconfig = require(path.join(__dirname,'../../config/database.js'));
var lottoList = {

    list : function(req, res){
      var connection = mysql.createConnection(dbconfig);
      connection.connect(function(err){
        if(!err) {
          console.log("Database is connected ... nn");
        } else {
          console.log("Error connecting database ... nn:" + err);
        }
        var sql = "SELECT * FROM lotto_base_result where year = '2019'";
        connection.query(sql, function(error, results, fields){
          if(error) {
            console.log(error);
          }
          console.log(results);
          res.render('cmm/lottoList',{list:results});
          connection.end();
        });
      });
    }
};

module.exports = lottoList;
