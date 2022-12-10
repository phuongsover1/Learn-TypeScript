"use strict";
// Introducing to Union Types
let age = 21;
age = '23';
let location1 = { x: 1, y: 2 };
location1 = { lat: 34, long: 45 };
// Type Narrow with Union Types
function calculateTax(price, tax) {
    if (typeof price === 'string')
        price = parseFloat(price.replace('$', ''));
    return price * tax;
}
console.log(calculateTax(23, 0.2));
console.log(calculateTax('$23', 0.2));
// Union types and arrays
let stuff = 2;
stuff = ['sefsdf', 'fdf'];
// stuff = [2, 3]; // error
let numberAndStrArray;
numberAndStrArray = [2, 3, 'dfdf'];
numberAndStrArray = ['2', 'fjdkf', 2, 3];
// numberOrStrArray = 2; // error
// numberOrStrArray = 'fdfj'; // error
let numberOrStrArray;
numberOrStrArray = [1, 2, 34];
numberOrStrArray = ['sf', 'fdf'];
// numberOrStrArray = [1, '2323']; // error
const locations = [];
locations.push({ lat: 3, long: 2 });
locations.push({ x: 5, y: 6 });
