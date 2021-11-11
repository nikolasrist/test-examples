import { pg } from './database/postgres';
import { fooDAO } from './foo.dao';
import { Foo } from './foo.models';

export const createFoo = async (name: string): Promise<Foo> => {
  return fooDAO.insert(pg, { name });
};
