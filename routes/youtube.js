var express = require('express');
var router = express.Router();
const youtubeController = require('../controllers/youtube')

router.get('/', youtubeController.getVideos)

module.exports = router;
