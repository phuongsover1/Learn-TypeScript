"use strict";
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
const randomCoordinate = () => {
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
function doublePonit(point) {
    return { x: point.x * 2, y: point.y * 2 };
}
console.log(`doublePoint: ${doublePonit({ x: 2, y: 4 })}`);
let a = 2;
