
exports.up = function(knex, Promise) {
  return knex.schema.table('contacts', (table) => {
    table.string('address').nullable().alter();
    table.string('mobile').nullable().alter();
    table.string('work').nullable().alter();
    table.string('home').nullable().alter();
    table.string('email').nullable().alter();
    table.string('twitter').nullable().alter();
    table.string('instagram').nullable().alter();
    table.string('github').nullable().alter();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('contacts');
};
