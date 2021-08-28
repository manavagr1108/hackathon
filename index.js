const express = require('express');
const http = require('http');
const bodyparser = require('body-parser');
const session = require('express-session');
const {v4: uuidv4 } = require('uuid');
const app = express();
const port = process.env.PORT ||8080;
const mysql = require('mysql');
const dotenv = require('dotenv');
const scoketIO = require('socket.io');
const path = require('path');
// const { log } = require('console');

dotenv.config({
  path:'./.env'
})
//body pareser
app.use(bodyparser.json())
app.use(bodyparser.urlencoded({ extended:true}))
// var urlencodedparsers =bodyparser.urlencoded({ extended:false })
//uuid
app.use(session({
    secret: uuidv4(),
    resave: false,
    saveUninitialized: true,
  }));

//database setup
const db= mysql.createConnection(
 { host: process.env.DATABASE_HOST,
  username: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE
  });

db.connect((error) => {
  if(error){
    console.log(error);
  }else{
    console.log('mysql connection established');
  }
})

  app.set('views','./views')
  app.set('view engine','ejs');
  app.use(express.static('public'))
  app.use(express.urlencoded({extended: false}))
  app.use(express.json());
  app.use(express.static(path.join(__dirname,'public')));
app.use('/',require('./routes/index'));
app.use('/home',require('./routes/index'));
app.use('/auth',require('./routes/auth'))



let server = http.createServer(app);
server.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
  })
  