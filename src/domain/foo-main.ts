import { Knex } from 'knex';
import { createFoo } from './foo-handler';
import { Foo } from './foo.models';

export const main = async (pg: Knex, elements: string[]): Promise<Foo[]> => {
  return await Promise.all(elements.map((element) => createFoo(pg, element)));
};