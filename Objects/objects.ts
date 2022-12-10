// // A function with an object type parameter
// const printName = (name: { first: string; last: string }): void => {
//   console.log(`Name: ${name.first} ${name.last}`);
// };
// const singer = {
//   first: 'Phuong',
//   last: 'Nguyen',
//   age: 22,
//   isAlive: true,
// };

// printName(singer);

// // printName({ first: 'Phuong', last: 'Nguyen' });

// let coordinate: { x: number; y: number } = { x: 34, y: 100 };
// Creating Type Aliases
// type Point = {
//   x: number;
//   y: number;
// };

// const randomCoordinate = (): Point => {
//   const coordinate = { x: 1, y: 1, z: 1 };
//   return coordinate;
//   // return {
//   //   x: Number(Math.random().toFixed(4)) * 100,
//   //   y: Number(Math.random().toFixed(4)) * 100,
//   //   z: 1,
//   // };
// };
// console.log(randomCoordinate());
// console.log(randomCoordinate());
// console.log(randomCoordinate());
// console.log(randomCoordinate());
// console.log(randomCoordinate());
// console.log(randomCoordinate());
// console.log(randomCoordinate());
// console.log(randomCoordinate());
// console.log(randomCoordinate());
// console.log(randomCoordinate());
// console.log(randomCoordinate());

// function doublePonit(point: Point): Point {
//   return { x: point.x * 2, y: point.y * 2 };
// }

// console.log(`doublePoint: ${doublePonit({ x: 2, y: 4 })}`);

// type MyNum = number;
// let a: MyNum = 2;

type Song = {
  title: string;
  artist: string;
  numStreams: number;
  credits: {
    producer: string;
    writer: string;
  };
};

function calculatePayout(song: Song): number {
  return song.numStreams * 0.33;
}

function printSong(song: Song): void {
  console.log(`${song.title} - ${song.artist}`);
}

const mySong: Song = {
  title: 'UnchainedMelogy',
  artist: 'Righteous Brothers',
  numStreams: 12873321,
  credits: {
    producer: 'PhilSpector',
    writer: 'Alex North',
  },
};

console.log(`calculatePayout: ${calculatePayout(mySong)}`);
printSong(mySong);
