// function square(num: number): number {
//   return num * num;
// }

// function greet(person: string): string {
//   return `Hi there, ${person}`;
// }

// square(3);
// greet('Phuong');

// const doSomething = (
//   person: string,
//   age: number,
//   isFunny: boolean
// ): void => {};

// doSomething('Phuong', 21, true);

// Working with default parameters
const greet = (person: string = 'stranger'): string => {
  return `Hi there, ${person}`;
};

console.log(greet());
console.log(greet('Phuong'));
