
exports.up = function(knex) {
  return knex.schema
    .createTable('categories', (table) => {
      table.increments('category_id')
      table.string('category_name', 128).unique().notNullable()
    })
  
};

exports.down = function(knex) {
  return knex.schema 
    .dropTableIfExists('categories')
};
