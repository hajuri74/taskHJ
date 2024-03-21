const express= require('express');
const bodyParser=require('body-parser');
const maria = require('./database/maria');

const app = express();
const port = 3000;

maria.connect();

//app.use(bodyParser.urlencoded({extended: false}))

app.use(bodyParser.json());

//app.use(express.static('dist'));

const module1 = require('./router/module1')(app,maria);

app.listen(port, ()=>{
    console.log(`${port}번 포트로 서버 실행중`);
})