var express = require('express');
var router = express.Router();
const user = require('./users')

/* GET home page. */

router.get('/', user)

module.exports = router;