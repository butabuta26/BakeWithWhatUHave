const express = require('express');
const router = express.Router();

const pageController = require('../controllers/recipe.controller');

router.get('/recipes', pageController.recipes);
router.get('/recipe/:id', pageController.recipe);
router.get('/about', pageController.about);
router.get('/contact', pageController.contact);
router.get('/account', pageController.account);

module.exports = router;