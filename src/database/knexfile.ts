module.exports = {
  client: 'pg',
  connection: {
    user: 'postgres',
    host: 'localhost',
    database: 'postgres',
    port: 5432,
    password: 'secret',
    ssl: false
  },
  debug: false
};
