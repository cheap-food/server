var express = require('express');
var router = express.Router();
const recipeController = require('../controllers/recipe')

router.post('/search', recipeController.search)
router.get('/detail/:rId', recipeController.getRecipeDetail)
// maman was here

module.exports = router;
