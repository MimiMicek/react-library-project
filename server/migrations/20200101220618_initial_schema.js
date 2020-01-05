
exports.up = function(knex) {

    return knex.schema

    .createTable('users', (table) => {
        table.increments('id');
        table.string('first_name');
        table.string('last_name');
        table.string('username').unique();
        table.string('email');
        table.timestamp('created_at_timestamp').defaultTo(knex.fn.now());
        table.string('password');
    })

    .createTable('books', (table) => {
      table.increments('id');
      table.integer('user_id').unsigned();
      table.foreign('user_id').references('users.id');
      table.string('title');
      table.string('author');
      table.string('text');
    });
};

exports.down = function(knex) {

    return knex.schema

        .dropTableIfExists('books')
        .dropTableIfExists('users');
};
