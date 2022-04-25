//Express 모듈 불러오기
let express = require('express'), 
            http = require('http');


//express 객체 생성
let app = express();

// 기본 포트를 app 객체에 속성으로 설정
app.set('port', process.env.PORT || 3000);

// Express 서버 시작
http.createServer(app).listen(app.get('port'), function(){
    console.log('익스프레스 서버를 시작합니다:' + app.get('port'));
});
