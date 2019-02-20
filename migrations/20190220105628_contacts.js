
exports.up = function(knex, Promise) {
  return knex.schema.createTable('contacts', (table) => {
    table.increments().primary();
    table.integer('created_by').notNullable();
    table.string('name').notNullable();
    table.string('address').notNullable();
    table.string('mobile').notNullable();
    table.string('work').notNullable();
    table.string('home').notNullable();
    table.string('email').notNullable();
    table.string('twitter').notNullable();
    table.string('instagram').notNullable();
    table.string('github').notNullable();
    table.timestamps(true, true);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('contacts');
};
