// Introducing to Union Types
let age: number | string = 21;
age = '23';

type UnionPoint = {
  x: number;
  y: number;
};

type UnionLocation = {
  lat: number;
  long: number;
};

let location1: UnionPoint | UnionLocation = { x: 1, y: 2 };
location1 = { lat: 34, long: 45 };
