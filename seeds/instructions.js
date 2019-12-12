exports.seed = function(knex) {
  return knex('instructions')
    .truncate()
    .then(function() {
      return knex('instructions').insert([
        { id: 1, steps: 'preheat oven' },
        { id: 2, steps: 'mix ingredients' },
        { id: 3, steps: 'boil water' }
      ]);
    });
};
