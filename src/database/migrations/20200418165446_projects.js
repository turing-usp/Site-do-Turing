exports.up = function (knex) {
    return knex.schema.createTable('projects', function (table) {
        table.increments('projectId').primary();
        table.string('description').notNullable();
        table.string('githubRepo').notNullable();
        table.string('squad').notNullable();
        table.string('tags');
    })
};

exports.down = function (knex) {
    return knex.schema.dropTable('projects');
};