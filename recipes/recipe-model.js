module.exports = {
  getRecipes,
  getShoppingList,
  getInstructions
};

function getRecipes() {
  return db('recipes');
}

// SELECT ingredients.name
//     , recipes.ingredient_quantity
// FROM recipes
// JOIN ingredients
// ON ingredients.id = recipes.ingredient_id
// WHERE recipes.id = 1;

function getShoppingList(id) {
  return db
    .select('ingredients.name as ingredient_name', 'recipe.ingredient_quantity')
    .from('recipes')
    .join('ingredients', 'ingredients.id', 'recipes.ingredient_id')
    .where({ 'recipes.id': id });
}

// SELECT instructions.steps
// FROM instructions
// JOIN recipes
// ON recipes.step_id = instructions.id
// WHERE recipes.id = 1;

function getInstructions(id) {
  return db
    .select('instructions.steps')
    .from('recipes')
    .join('recipes', 'recipes.step_id', 'instructions.id')
    .where({ 'recipes.id': id });
}
