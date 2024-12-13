const express = require('express');
const router = express.Router();
const {detail,all} = require('../controllers/productsController')

router.get('/',all);
router.post('/',all);
router.get('/:id/detail',detail);


module.exports = router;