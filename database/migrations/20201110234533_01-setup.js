exports.up = async function (knex) {
  return await knex.schema.createTable('users', (table) => {
    table.increments('id')
    table.string('email').unique().notNullable()
    table.string('password').notNullable()
    table.boolean('isAdmin').notNullable().defaultTo(false)
    table.string('first_name')
    table.string('last_name')
    table.timestamps(true, true)
  })
}

exports.down = async function (knex) {
  return await knex.schema.dropTableIfExists('users')
}
