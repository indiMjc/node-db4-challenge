exports.up = function(knex) {
  return knex.schema
    .createTable('ingredients', tbl => {
      tbl.increments();

      tbl
        .string('name', 128)
        .notNullable()
        .unique();
    })
    .createTable('instructions', tbl => {
      tbl.increments();

      tbl
        .string('steps')
        .notNullable()
        .unique();
    })
    .createTable('recipes', tbl => {
      tbl.increments();

      tbl
        .string('name')
        .notNullable()
        .unique();

      tbl
        .integer('ingredient_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('ingredients')
        .onDelete('CASCADE')
        .onUpdate('CASCADE');

      tbl
        .integer('step_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('instructions')
        .onDelete('CASCADE')
        .onUpdate('CASCADE');

      tbl.string('ingredient_quantity').notNullable();
    });
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists('ingredients')
    .dropTableIfExists('instructions')
    .dropTableIfExists('recipes');
};
