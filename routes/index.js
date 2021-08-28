const express = require('express');
const router = express.Router();
const app = express();


// routes

router.get('/',(req,res)=>{
    res.render('index')
})

module.exports = router;