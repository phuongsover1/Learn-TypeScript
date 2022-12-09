"use strict";
// A function with an object type parameter
const printName = (name) => {
    console.log(`Name: ${name.first} ${name.last}`);
};
printName({ first: 'Phuong', last: 'Nguyen' });
