var express = require('express');
var http = require('http');
var path = require('path');
var app = express();


/*view engine pug template 사용*/
app.set('view engine' , 'pug');
/*view 파일 경로 설정 __dirname 경로 필 추가*/
app.set('views', path.join(__dirname, '/public/view'));

/*접속 서버 포트 설정*/
app.set('port',process.env.PORT||80);
http.createServer(app).listen(app.get('port'),function(){
  console.log('Express server listening on port '+app.get('port'));
});
 


/*
  Router mapping
  ! Router 추가 시 매핑 추가
*/

/*node_modules*/
//app.use('/node_modules',express.static(path.join(__dirname,'/node_modules')));

/*javascript css*/
app.use('/javascript',express.static(path.join(__dirname,'/javascript')));
app.use('/css',express.static(path.join(__dirname,'/css')));

var indexRouter = require('./routes/index');
app.use('/',indexRouter);

var testRouter = require('./routes/test/test');
app.use('/test', testRouter);

var testRouter = require('./routes/cmm/cmm');
app.use('/cmm', testRouter);
