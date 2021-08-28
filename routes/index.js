const { urlencoded } = require('body-parser');
const express = require('express');
const router = express.Router();
const app = express();
const mysql = require('mysql');
var bodyParser = require('body-parser')

const db= mysql.createConnection(
   { host: process.env.DATABASE_HOST,
    username: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE
    });

   db.connect();

app.set('views','./views')
app.set('view engine','ejs');
app.use(express.static('public'))

//temp credentials


//login page
router.get('/', (req, res) => {
    res.render('base',{title :'sem-books'})
})

//dashboard page + checking of email and password

var urlencodedParser = bodyParser.urlencoded({ extended: false })

router.get('/dashboard', (req, res)=>{
    if(req.session.user)
    {
       res.render('dashboard',{user:req.session.user})
    }
 })

//logout
router.get('/logout', (req ,res)=>{
    req.session.destroy(function(err){
        
            res.render('base', { title: "Express", logout : "logout Successfully...!"})
        
    })
 })

 //signup
router.post('/signup', (req, res)=>{
   res.render('signup',{message:''})
})

router.post('/:id', (req, res)=>{
   let sem = req.params.id;
   if(sem==1)
   { 
      res.render('sem1')
   }
   if(sem==2)
   { 
      res.render('sem1')
   }
   if(sem==3)
   { 
      res.render('sem1')
   }
   if(sem==4)
   { 
      res.render('sem1')
   }
   if(sem==5)
   { 
      res.render('sem1')
   }
   if(sem==6)
   { 
      res.render('sem1')
   }
   if(sem==7)
   { 
      res.render('sem1')
   }
   if(sem==8)
   { 
      res.render('sem1')
   }
   console.log(sem);
})
module.exports = router;