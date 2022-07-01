import { Knex } from 'knex';
import { createFoo } from './foo-handler';
import { fooDAO } from './foo.dao';

jest.mock('./foo.dao');
const pgMock = {};

describe('FooHanlder', () => {
  const daoSpy = jest.spyOn(fooDAO, 'insert');
  it('handles request', async () => {
    await createFoo(pgMock as unknown as Knex, 'testFoo');
    expect(daoSpy).toHaveBeenCalledWith(pgMock, { name: 'testFoo' });
  });
});
