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

router.get('/shoppinglist/:id', (req, res) => {
  console.log('id', req.params.id);
  Recipes.getShoppingList(req.params.id)
    .then(list => {
      res.json(list);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ message: 'Failed to get shopping list.' });
    });
});

router.get('/instructions/:id', (req, res) => {
  console.log('id', req.params.id);
  Recipes.getInstructions(req.params.id)
    .then(inst => {
      res.json(inst);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ message: 'Failed to get instructions.' });
    });
});

module.exports = router;
