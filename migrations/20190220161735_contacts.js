
exports.up = function(knex, Promise) {
  return knex.schema.table('contacts', (table) => {
    table.integer('created_by').notNullable().alter();
    table.foreign('created_by').references('id').inTable('users');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('contacts');
};
