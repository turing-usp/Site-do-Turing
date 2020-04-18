exports.up = function (knex) {
    return knex.schema.createTable('faq', function (table) {
        table.increments('questionId').primary();
        table.string('question').notNullable();
        table.string('answer').notNullable();
    })
};

exports.down = function (knex) {
    return knex.schema.dropTable('faq');
};