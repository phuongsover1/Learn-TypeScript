// A function with an object type parameter
const printName = (name: { first: string; last: string }): void => {
  console.log(`Name: ${name.first} ${name.last}`);
};
const singer = {
  first: 'Phuong',
  last: 'Nguyen',
  age: 22,
  isAlive: true,
};

printName(singer);

// printName({ first: 'Phuong', last: 'Nguyen' });

// let coordinate: { x: number; y: number } = { x: 34, y: 100 };

const randomCoordinate = (): { x: number; y: number } => {
  const coordinate = { x: 1, y: 1, z: 1 };
  return coordinate;
  // return {
  //   x: Number(Math.random().toFixed(4)) * 100,
  //   y: Number(Math.random().toFixed(4)) * 100,
  //   z: 1,
  // };
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
