var express = require('express');
var router = express.Router();
const {home} = require('../controllers/indexController')
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.get('/home', home);

router.post('/submit', function(req, res, next) {
  const { username,email,password,dob,genero,country} = req.body;
  console.log(req.body);
  
  const respuesta = {
    id:1,
    nombre:username,
    email,
  }

  res.send(respuesta)
  
});

module.exports = router;
