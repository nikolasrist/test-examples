import knex, { Knex } from 'knex';
import path from 'path';
import { PostgreSqlContainer, StartedPostgreSqlContainer } from 'testcontainers';
import { main } from './foo-main';

describe('Integration test', () => {
  jest.setTimeout(180_000); // Timeout is needed otherwise test fails with missing database connection
  let container: StartedPostgreSqlContainer;
  let pg: Knex;

  beforeAll(async () => {
    // Use pre-defined container class for postgres table
    container = await new PostgreSqlContainer().withDatabase('postgres').withPassword('secret').withUser('postgres').start();

    // Set up proper Knex client from created test container
    pg = knex({
      client: 'pg',
      connection: {
        user: container.getUsername(),
        host: container.getHost(),
        database: container.getDatabase(),
        port: container.getPort(),
        password: container.getPassword(),
        ssl: false
      },
      pool: { min: 3, max: 10 },
      migrations: { directory: path.join(__dirname, './database/migrations') },
      debug: false
    });

    // Create extension for auto generated UUID
    await pg.raw('CREATE EXTENSION IF NOT EXISTS "uuid-ossp"');

    // Log version to check database is working
    const version = await pg.raw('select version()');
    console.log('VERSION: ', version);

    // Run the Knex migration to have proper database schema in place
    await pg.migrate.latest();
  });

  afterAll(async () => {
    await container.stop();
    await pg.destroy();
  });
  describe('Test Foo handler', () => {
    it('Creates a list of foos', async () => {
      const elements = ['Foo1', 'Foo2', 'Foo3', 'FooBar'];
      await main(pg, elements);

      const foos = await pg.table('foo').select().orderBy('name');

      console.log(foos);

      expect(foos.length).toEqual(4);
      expect(foos[0].name).toEqual(elements[0]);
      expect(foos[1].name).toEqual(elements[1]);
      expect(foos[2].name).toEqual(elements[2]);
      expect(foos[3].name).toEqual(elements[3]);
    });
  });
});
