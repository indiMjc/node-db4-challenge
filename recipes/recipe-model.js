const db = require('../data/dbConfig');

module.exports = {
  getRecipes,
  getShoppingList,
  getInstructions
};

function getRecipes() {
  return db('recipes');
}

function getShoppingList(id) {
  return db
    .select('ingredients.name as ingredient_name', 'recipe.ingredient_quantity')
    .from('recipes')
    .join('ingredients', 'ingredients.id', 'recipes.ingredient_id')
    .where({ 'recipes.id': id });
}

function getInstructions(id) {
  return db
    .select('instructions.steps')
    .from('recipes')
    .join('recipes', 'recipes.step_id', 'instructions.id')
    .where({ 'recipes.id': id });
}
