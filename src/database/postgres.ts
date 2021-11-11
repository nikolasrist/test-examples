import knex from 'knex';

export const pg = knex({
  client: 'pg',
  connection: {
    user: 'postgres',
    host: 'localhost',
    database: 'postgres',
    port: 5432,
    password: 'secret',
    ssl: false
  },
  pool: {
    min: 2,
    max: 10
  }
});
