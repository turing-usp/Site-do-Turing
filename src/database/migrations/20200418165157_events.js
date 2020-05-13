
exports.up = function(knex) {
  return knex.schema.createTable('events', function (table) {
      table.increments('eventId').primary();
      table.string('name').notNullable();
      table.string('date').notNullable();
      table.string('link');
      table.string('img');
      table.string('realizado').notNullable();
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('events');
};