
exports.up = function(knex) {
  return knex.schema
    .createTable('categories', (table) => {
      table.increments('category_id')
      table.string('category_name', 128).unique().notNullable()
    })
    .createTable('recipes', (table) => {
      table.increments('recipe_id')
      table.string('recipe_name', 128).unique().notNullable()
      table.string('source', 128)
      table.integer('category_id')
        .unsigned()
        .notNullable()
        .references('category_id')
        .inTable('categories')
        .onDelete('RESTRICT')
        .onUpdate('RESTRICT')
    })
    .createTable('ingredients', (table) => {
      table.increments('ingredient_id')
      table.string('ingredient_name', 128).notNullable()
      table.string('unit', 25).notNullable()
    })
    .createTable('steps', (table) => {
      table.increments('step_id')
      table.integer('step_number').unsigned().notNullable()
      table.string('step_instructions')
      table.integer('recipe_id')
        .unsigned()
        .notNullable()
        .references('recipe_id')
        .inTable('recipes')
        .onDelete('RESTRICT')
        .onUpdate('RESTRICT')
    })
    .createTable('step_ingredients', (table) => {
      table.increments('step_ingredient_id')
      table.float('quantity')
      table.integer('step_id')
        .unsigned()
        .notNullable()
        .references('step_id')
        .inTable('steps')
        .onDelete('RESTRICT')
        .onUpdate('RESTRICT')
      table.integer('ingredient_id')
        .unsigned()
        .notNullable()
        .references('ingredient_id')
        .inTable('ingredients')
        .onDelete('RESTRICT')
        .onUpdate('RESTRICT')
    })
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists('step_ingredients')
    .dropTableIfExists('steps')
    .dropTableIfExists('ingredients')
    .dropTableIfExists('recipes')
    .dropTableIfExists('categories')
};
