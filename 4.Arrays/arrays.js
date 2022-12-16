"use strict";
// Working with Array Types
// declaring an unmodified empty array
const emptyArr = [];
// emptyArr.push('fdkfj'); // error
// emptyArr.push(123); // error
const activeUsers = [];
activeUsers.push("Phuong");
activeUsers.push("Khang");
activeUsers.push("Long");
// activeUsers.push(123); //error
activeUsers.push("Luu", "Thing");
console.log(activeUsers);
const ageList = [];
ageList.push(21);
ageList.push(3, 4, 5, 6);
console.log(ageList);
const points = [];
// const points: Point[] = [];
points.push({ x: 2, y: 3 });
// points.push({x:3}); // error
// points.push({y:3}); // error
console.log(points);
//Multidimensional arrays
const board = [
    ["x", "o", "x"],
    ["o", "x", "o"],
    ["x", "o", "x"],
];
const threeDimensionOfNum = [[[1, 2]], [[4]], [[5, 6, 7]]];
