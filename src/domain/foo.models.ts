export interface Foo {
  id: string;
  name: string;
}

export interface FooUpdate {
  name: string;
}

export interface Foo2 {
  id: string;
  name: string;
  age?: number | undefined;
}
