import knex from 'knex';

export async function up(knex) {
    return knex.schema.createTable('users', (table) => {
        table.increment('id').primary();
        table.string('name');
        table.string('email');
        table.integer('age');
        table.string('city');
        table.string('book_title');
        table.string('book_categaory');
        table.string('book_description');
        table.string('url_image');
    });
}

export async function down(knex) {
    return knex.schema.dropTable('users');
}