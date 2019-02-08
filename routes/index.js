var express = require('express');
var router = express.Router();
const user = require('./users')
const recipeRoute = require('./recipe')
const translateRouter = require('./translate')

/* GET home page. */

router.use('/', user)
router.use('/recipe', recipeRoute)
router.use('/translate', translateRouter)

module.exports = router;