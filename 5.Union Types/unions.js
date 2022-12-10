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
