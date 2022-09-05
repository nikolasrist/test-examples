import { main } from '../foo-main';
import { ContainerInstance, startContainer, stopContainer, TEST_TIMEOUTS } from './test-setup';

describe('Component test', () => {
  jest.setTimeout(TEST_TIMEOUTS); // Timeout is needed otherwise test fails with missing database connection
  let containerInstance: ContainerInstance;

  beforeAll(async () => {
    containerInstance = await startContainer();
  });

  afterAll(async () => await stopContainer(containerInstance));
  describe('Test Foo handler', () => {
    it('Creates a list of foos', async () => {
      const elements = ['Foo1', 'Foo2', 'Foo3', 'FooBar'];
      const creationResult = await main(containerInstance.pg, elements);

      const foos = await containerInstance.pg.table('foo').select();

      console.log(foos);

      expect(foos).toMatchObject(creationResult);
    });
  });
});
