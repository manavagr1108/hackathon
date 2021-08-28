const express = require('express');
const router = express.Router();
const authController = require('../controllers/auth');

router.post('/register',authController.register )
router.post('/login',authController.login )
router.post('/admin',authController.admin )
router.get('/recent',authController.recent)
module.exports = router;
