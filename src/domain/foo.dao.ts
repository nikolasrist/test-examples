import { Knex } from 'knex';
import { Foo, FooUpdate } from './foo.models';

export type DAO = typeof fooDAO;

export const fooDAO = {
  insert: async (pg: Knex, item: FooUpdate): Promise<Foo> => {
    const items = await pg.table<Foo>('foo').insert(item).returning('*');
    return items[0];
  },

  delete: async (pg: Knex, itemId: string): Promise<number> => {
    return await pg.table<number>('foo').where('id', itemId).del();
  }
};
