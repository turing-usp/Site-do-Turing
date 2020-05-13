
exports.up = function(knex) {
  return knex.schema.createTable('members', function(table){
    table.increments('memberId').primary();
    table.string('name').notNullable();
    table.string('role').notNullable();
    table.string('linkedin').notNullable();
    table.string('github').notNullable();
    table.string('email').notNullable();
    table.string('photoLink').notNullable();
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('members');
};
