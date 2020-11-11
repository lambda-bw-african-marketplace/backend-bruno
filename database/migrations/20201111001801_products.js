exports.up = async function (knex) {
  await knex.schema.createTable('locations', (table) => {
    table.increments()
    table.string('name').notNullable()
  }),
    await knex.schema.createTable('products', (table) => {
      table.increments()
      table.string('name').notNullable()
      table.float('price').notNullable()
      table.string('description').notNullable()
      table.string('imageUrl').notNullable()
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
}

exports.down = async function (knex) {
  await knex.schema.dropTableIfExists('products')
  await knex.schema.dropTableIfExists('locations')
}
