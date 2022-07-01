import { ContainerInstance, startContainer, stopContainer, TEST_TIMEOUTS } from '../test/test-setup';
import { fooDAO } from './foo.dao';

describe('FooDAO', () => {
  jest.setTimeout(TEST_TIMEOUTS); // Timeout is needed otherwise test fails with missing database connection
  let containerInstance: ContainerInstance;

  beforeAll(async () => {
    containerInstance = await startContainer();
  });

  afterAll(async () => await stopContainer(containerInstance));

  it('inserts and deletes items', async () => {
    const result = await fooDAO.insert(containerInstance.pg, { name: 'testFoo' });
    expect(result).toMatchObject({
      name: 'testFoo'
    });
    expect(result.id).toBeTruthy();

    const deletionResult = await fooDAO.delete(containerInstance.pg, result.id);
    expect(deletionResult).toEqual(1);
  });
});
