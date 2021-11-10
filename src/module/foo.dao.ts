import { Knex } from 'knex';
import { Foo } from './foo.models';

export type DAO = typeof dao;

export const dao = {
  insert: async (pg: Knex, item: Foo): Promise<Foo> => {
    const items = await pg<Foo>('foo').insert(item).returning('*');
    return items[0];
  }
};
