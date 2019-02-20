
exports.up = function(knex, Promise) {
  return knex.schema.createTable('users', (table) => {
    table.increments().primary();
    table.string('username').notNullable().unique();
    table.string('name').nullable();
    table.string('email').nullable();
    table.string('address').nullable();
    table.timestamps(true, true);
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('users');
};
