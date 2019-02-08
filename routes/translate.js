var express = require('express');
var router = express.Router();
const translationController = require('../controllers/translationController')

router.post('/', translationController.translateToIndo)
router.get('/allLangs', translationController.getAllLangs)

module.exports = router