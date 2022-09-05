import { Foo2 } from './foo.models';

export function mapNameToFoo2(name: string, age: number | undefined): Foo2 {
  return age
    ? {
        id: 'foo2Id',
        name,
        age
      }
    : {
        id: 'foo2Id',
        name
      };
}
