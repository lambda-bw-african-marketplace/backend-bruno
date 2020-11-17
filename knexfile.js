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
    client: 'pg',
    connection: process.env.DATABASE_URL,

    migrations: {
      directory: './database/migrations',
      tableName: 'knex_migrations',
    },

    seeds: {
      directory: './database/seeds',
    },
  },
  test: {
    client: 'sqlite3',
    connection: {
      filename: './database/testing.db3',
    },
    migrations: {
      tableName: 'knex_migrations',
    },
    seeds: {
      directory: './database/seeds',
    },
    useNullAsDefault: true,
    pool: {
      afterCreate: (conn, done) => {
        conn.run('PRAGMA foreign_keys = ON', done)
      },
    },
  },
}
