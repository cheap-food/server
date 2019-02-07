var express = require('express');
var router = express.Router();
const user = require('./users')
const recipeRoute = require('./recipe')

/* GET home page. */

router.use('/', user)
router.use('/recipe', recipeRoute)

module.exports = router;