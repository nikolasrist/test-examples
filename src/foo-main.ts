import { createFoo } from './foo-handler';
export const main = async (elements: string[]): Promise<void> => {
  const result = Promise.all(elements.map((element) => createFoo(element)));

  console.log(result);
};
