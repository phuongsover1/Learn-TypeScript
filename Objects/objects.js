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
const user = {
    id: 124,
    username: 'catgirl',
    friends: ['phuong', 'khang', 'luu'],
};
console.log(`user.id: ${user.id}`);
// user.id = 3;
// user.friends = [];
user.friends.push('Phuong');
console.log(`user.friends: ${user.friends}`);
