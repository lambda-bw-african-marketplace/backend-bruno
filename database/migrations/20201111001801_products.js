exports.up = async function (knex) {
  await knex.schema.createTable('users', (table) => {
    table.increments('id')
    table.string('email').unique().notNullable()
    table.string('password').notNullable()
    table.boolean('isAdmin').notNullable().defaultTo(false)
    table.string('first_name')
    table.string('last_name')
    table.timestamps(true, true)
  })

  await knex.schema.createTable('products', (table) => {
    table.increments()
    table.string('name').notNullable()
    table.float('price').notNullable()
    table.string('city').notNullable()
    table.string('category').notNullable()
    table.string('description').notNullable()
    table.string('unit')
    table.string('image_url')
    table
      .integer('user_id')
      .unsigned()
      .references('id')
      .inTable('users')
      .onDelete('CASCADE')
      .onUpdate('CASCADE')
  })
}

exports.down = async function (knex) {
  await knex.schema.dropTableIfExists('products')
  await knex.schema.dropTableIfExists('users')
}
