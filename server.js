const express = require('express');
const app = express();
const path = require('path');


// ejs setup

app.set('views','./views')
app.set('view engine','ejs');

//static files
app.use(express.static('public'))

//route

app.use('/',require('./routes/index'));





//port
app.listen(process.env.PORT || 4000);