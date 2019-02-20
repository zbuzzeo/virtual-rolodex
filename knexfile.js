// Update with your config settings.

require('dot-env').config({ path : './.env' });

module.exports = {
    client: 'postgresql',
    connection: {
      host:      process.env.POSTGRES_HOSTNAME,
      user:      process.env.POSTGRES_USER,
      password:  process.env.POSTGRES_PASSWORD,
      database:  process.env.POSTGRES_DB
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
};
