var express = require('express');
var router = express.Router();
const userRoute = require('./users')

/* GET home page. */

router.use('/user', userRoute)

module.exports = router;