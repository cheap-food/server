var express = require('express');
var router = express.Router();
const user = require('./users')

/* GET home page. */

router.use('/users', user)

module.exports = router;