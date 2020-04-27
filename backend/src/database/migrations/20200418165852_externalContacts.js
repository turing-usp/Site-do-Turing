exports.up = function (knex) {
    return knex.schema.createTable('externalContacts', function (table) {
        table.increments('contactId').primary();
        table.string('contactName').notNullable();
        table.string('email').notNullable();
        table.string('entity');
        table.string('motivation').notNullable();
        table.string('message').notNullable();
        table.string('date').notNullable();
    })
};

exports.down = function (knex) {
    return knex.schema.dropTable('externalContacts');
};