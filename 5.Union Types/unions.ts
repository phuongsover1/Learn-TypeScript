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

// Type Narrow with Union Types
function calculateTax(price: number | string, tax: number): number {
  if (typeof price === 'string')
    price = parseFloat(price.replace('$', ''));
  return price * tax;
}

console.log(calculateTax(23, 0.2));
console.log(calculateTax('$23', 0.2));
