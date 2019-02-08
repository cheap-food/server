var express = require('express');
var router = express.Router();
const user = require('./users')
const recipeRoute = require('./recipe')
const translateRoute = require('./translate')
const youtubeRoute = require('./youtube')

router.use('/', user)
router.use('/recipe', recipeRoute)
router.use('/translate', translateRoute)
router.use('/youtube', youtubeRoute)

module.exports = router;