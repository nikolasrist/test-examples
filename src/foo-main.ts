import { Knex } from 'knex';
import { createFoo } from './domain/foo-handler';
import { Foo } from './domain/foo.models';

export const main = async (pg: Knex, elements: string[]): Promise<Foo[]> => {
  return await Promise.all(elements.map((element) => createFoo(pg, element)));
};
