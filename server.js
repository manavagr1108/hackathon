const express = require('express');
const app = express();
const path = require('path');
const {v4: uuidv4 } = require('uuid');
const mysql = require('mysql');
const dotenv = require('dotenv');

dotenv.config({
    path: './.env'
})
//uuid
app.use(session({
    secret: uuidv4(),
    resave: false,
    saveUninitialized: true,
  }));

//db setup
const db = mysql.createConnection(
    {
        host: process.env.DATABASE_HOST,
        username: process.env.DATABASE_USER,
        password: process.env.DATABASE_PASSWORD,
        database: process.env.DATABASE
    });

db.connect((error) => {
    if (error) {
        console.log(error);
    } else {
        console.log('mysql connection established');
    }
})

// ejs setup
app.set('views', './views')
app.set('view engine', 'ejs');

//static files
app.use(express.static('public'))

//route
app.use('/', require('./routes/index'));
app.use('/home', require('./routes/index'));
// app.use('/auth',require('./routes/auth'))



app.listen(process.env.PORT || 4000);