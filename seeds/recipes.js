exports.seed = function(knex) {
  return knex('recipes')
    .truncate()
    .then(function() {
      return knex('recipes').insert([
        {
          id: 1,
          name: 'cake',
          ingredient_quantity: 1,
          ingredient_id: 3,
          step_id: 3
        },
        {
          id: 2,
          name: 'soup',
          ingredient_quantity: 2,
          ingredient_id: 1,
          step_id: 2
        },
        {
          id: 3,
          name: 'steak',
          ingredient_quantity: 3,
          ingredient_id: 2,
          step_id: 1
        }
      ]);
    });
};
