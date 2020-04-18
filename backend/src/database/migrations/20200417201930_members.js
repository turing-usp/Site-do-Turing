
exports.up = function(knex) {
  //TODO
};

exports.down = function(knex) {
  return knex.schema.dropTable('members');
};
