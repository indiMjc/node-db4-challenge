exports.seed = function(knex) {
  return knex('ingredients')
    .truncate()
    .then(function() {
      return knex('ingredients').insert([
        { id: 1, name: 'milk' },
        { id: 2, name: 'sugar' },
        { id: 3, name: 'butter' }
      ]);
    });
};
