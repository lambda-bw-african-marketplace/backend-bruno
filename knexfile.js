// Update with your config settings.

module.exports = {
  development: {
    client: 'postgresql',
    connection: {
      database: 'unit4',
      user: 'postgres',
      password: '',
    },
    migrations: {
      directory: './database/migrations',
      tableName: 'knex_migrations',
    },
    seeds: {
      directory: './database/seeds',
    },
  },

  production: {
    client: 'postgresql',
    connection: process.env.DATABASE_URL,

    migrations: {
      directory: './database/migrations',
      tableName: 'knex_migrations',
    },

    seeds: {
      directory: './database/seeds',
    },
  },
}
