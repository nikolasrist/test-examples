import { mapNameToFoo2 } from './foo.mapper';

describe('FooMapper', () => {
  describe('Foo2', () => {
    it('maps with age', () => {
      const result = mapNameToFoo2('FooName', 42);
      expect(result).toEqual({
        id: 'foo2Id',
        name: 'FooName',
        age: 42
      });
    });

    it('maps with undefined age', () => {
      const result = mapNameToFoo2('FooName', undefined);
      expect(result).toEqual({
        id: 'foo2Id',
        name: 'FooName'
      });
      expect(result).toStrictEqual({
        id: 'foo2Id',
        name: 'FooName'
      });
      expect(result).toEqual({
        id: 'foo2Id',
        name: 'FooName',
        age: undefined
      });
      expect(result).toStrictEqual({
        id: 'foo2Id',
        name: 'FooName',
        age: undefined
      });
    });
  });
});
