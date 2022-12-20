const nums: Array<number> = [];
const colors: Array<string> = [];

const inputEl = document.querySelector<HTMLInputElement>("#username");
console.dir(inputEl);
if (inputEl !== null) inputEl.value = "Hacked!!!";

const btn = document.querySelector<HTMLButtonElement>(".btn");

if (btn !== null) {
}

// Writing our first generics function

// instead of
function numberIndentity(item: number): number {
  return item;
}

function stringIdentity(item: string): string {
  return item;
}

function booleanIdentity(item: boolean): boolean {
  return item;
}

// we use
function identity<Type>(item: Type): Type {
  return item;
}

const number = identity<number>(3);

// const test = identity<string>(true); // error
const string = identity<string>("fjdkf");

// another example

function getRandomElement<T>(list: T[]): T {
  const randomIndex = Math.floor(Math.random() * list.length);
  return list[randomIndex];
}

console.log(getRandomElement<string>(["a", "b", "c"]));
console.log(getRandomElement<number>([1, 4, 2, 5]));
console.log(getRandomElement<boolean>([true, false]));

// using arrow function
const genericArrow = <T>(list: T[]): T => {
  const randomIndex = Math.floor(Math.random() * list.length);
  return list[randomIndex];
};

genericArrow<number>([1, 2, 34, 4]);

// Generics with multiple types
function merge<T extends object, U extends object>(obj1: T, obj2: U) {
  return {
    ...obj1,
    ...obj2,
  };
}
// console.log(merge({ name: "Colt" }, 9)); // error because literal number is not extends object
console.log(merge({ name: "Phuong" }, { number: 9 }));

console.log(merge({ name: "phuong" }, { pets: ["dog", "cat"] }));

interface Lengthy {
  length: number;
}

function printDoubleLength<T extends Lengthy>(thing: T): number {
  return thing.length * 2;
}
