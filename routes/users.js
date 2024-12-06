const express = require('express');
const router = express.Router();
const {login,register,profile} = require('../controllers/userController')
/* GET users listing. */
router.get('/login', login)

router.get('/register', register)

router.get('/profile', profile)

module.exports = router;
