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
// const greet = (person: string = 'stranger'): string => {
//   return `Hi there, ${person}`;
// };

// console.log(greet());
// console.log(greet('Phuong'));

// function a(num: number): number {
//   return 1;
// }

// Return TypeAnnotations
// function square(num: number): number {
//   return num * num;
// }

// function rando(num: number): string | number {
//   if (Math.random() < 0.5) return num.toString();
//   return num;
// }

// console.log(rando(1));
// console.log(rando(3));

// Anonymous Function Contextual Typing
// const colors = ['red', 'orange', 'yellow'];
// colors.map((color) => {
//   return color.toUpperCase();
// });

// Void
// a function that doesn't return anything
// const annoyUser = (num: number): void => {
//   for (let i = 0; i < num; i++) alert('HIIIIII!');
// };

// Never
// a function that doesn't finish running
const neverStop = (): never => {
  while (true) console.log("I'm still going!");
};

// A function that throws an exception
const giveError = (
  msg: string // return 'never' type
) => {
  throw new Error(msg);
  // return undefined;
  // return null;
};
