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

  await knex.schema.createTable('locations', (table) => {
    table.increments()
    table.string('name').notNullable().unique()
  }),
    await knex.schema.createTable('products', (table) => {
      table.increments()
      table.string('name').notNullable()
      table.float('price').notNullable()
      table.string('category').notNullable()
      table.string('description').notNullable()
      table.string('unit')
      table.string('imageUrl')
      table
        .integer('user_id')
        .unsigned()
        .references('id')
        .inTable('users')
        .onDelete('CASCADE')
        .onUpdate('CASCADE')

      table
        .integer('location_id')
        .unsigned()
        .references('id')
        .inTable('locations')
    })

  await knex.schema.createTable('product_locations', (table) => {
    table.integer('user_id').unsigned().references('id').inTable('users')
    table
      .integer('location_id')
      .unsigned()
      .references('id')
      .inTable('locations')
  })
}

exports.down = async function (knex) {
  await knex.schema.dropTableIfExists('product_locations')
  await knex.schema.dropTableIfExists('products')
  await knex.schema.dropTableIfExists('locations')
  await knex.schema.dropTableIfExists('users')
}
