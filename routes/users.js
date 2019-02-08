var express = require('express');
var router = express.Router();
const userController = require('../controllers/users')

router.post('/', userController.loginGoogle)

module.exports = router;
