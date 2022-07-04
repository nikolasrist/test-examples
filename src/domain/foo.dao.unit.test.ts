import { Knex } from 'knex';
import { fooDAO } from './foo.dao';

const pgMock = {
  insert: jest.fn(),
  returning: jest.fn(),
  where: jest.fn(),
  del: jest.fn(),
  table: jest.fn()
};
// This is an example of a unit test for DAOs which only test implementation but not functionality.
// You should not do this, instead use the integration test example to test your DAO files.
describe('FooDAO', () => {
  beforeEach(() => {
    pgMock.insert.mockReset().mockReturnThis();
    pgMock.returning.mockReset();
    pgMock.where.mockReset().mockReturnThis();
    pgMock.del.mockReset();
    pgMock.table.mockReset().mockReturnThis();
  });
  it('inserts', async () => {
    pgMock.returning.mockReturnValue([]);
    const item = { name: 'TestFoo' };

    await fooDAO.insert(pgMock as unknown as Knex, item);

    expect(pgMock.table).toBeCalledWith('foo');
    expect(pgMock.insert).toHaveBeenCalledWith(item);
    expect(pgMock.returning).toHaveBeenCalledWith('*');
  });

  it('deletes', async () => {
    pgMock.returning.mockReturnValue([]);

    await fooDAO.delete(pgMock as unknown as Knex, 'testItem');

    expect(pgMock.table).toBeCalledWith('foo');
    expect(pgMock.where).toHaveBeenCalledWith('id', 'testItem');
    expect(pgMock.del).toHaveBeenCalled();
  });
});
