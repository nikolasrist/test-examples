import { Knex } from 'knex';
import { createFoo } from './foo-handler';
export const main = async (pg: Knex, elements: string[]): Promise<void> => {
  const result = await Promise.all(elements.map((element) => createFoo(pg, element)));

  console.log(result);
};
