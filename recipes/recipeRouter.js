const express = require('express');

const Recipes = require('./recipe-model');

const router = express.Router();

router.get('/', (req, res) => {
  Recipes.getRecipes()
    .then(recipes => {
      res.json(recipes);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ message: 'Failed to get recipes.' });
    });
});

module.exports = router;
