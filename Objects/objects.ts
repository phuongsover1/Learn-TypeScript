// A function with an object type parameter
// const printName = (name: { first: string; last: string }): void => {
//   console.log(`Name: ${name.first} ${name.last}`);
// };

// printName({ first: 'Phuong', last: 'Nguyen' });

let coordinate: { x: number; y: number } = { x: 34, y: 100 };

const randomCoordinate = (): { x: number; y: number } => {
  return {
    x: Number(Math.random().toFixed(4)) * 100,
    y: Number(Math.random().toFixed(4)) * 100,
  };
};
console.log(randomCoordinate());
console.log(randomCoordinate());
console.log(randomCoordinate());
console.log(randomCoordinate());
console.log(randomCoordinate());
console.log(randomCoordinate());
console.log(randomCoordinate());
console.log(randomCoordinate());
console.log(randomCoordinate());
console.log(randomCoordinate());
console.log(randomCoordinate());
