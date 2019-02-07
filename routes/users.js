var express = require('express');
var router = express.Router();
const userController = require('../controllers/users')

/* GET users listing. */
router.post('/users', userController.loginGoogle)


module.exports = router;
