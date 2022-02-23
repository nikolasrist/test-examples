import { Knex } from 'knex';
import { fooDAO } from './foo.dao';
import { Foo } from './foo.models';

export const createFoo = async (pg: Knex, name: string): Promise<Foo> => {
  return fooDAO.insert(pg, { name });
};
