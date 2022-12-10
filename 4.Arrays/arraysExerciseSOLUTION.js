"use strict";
// **********************************************
// ******************* PART 1 *******************
// **********************************************
// Create an empty array of numbers called "ages":
const ages = [];
// **********************************************
// ******************* PART 2 *******************
// **********************************************
// Create an array variable called gameBoard that starts as an empty array.
// It should be typed to hold a 2 dimensional array of strings
const gameBoard = [];
gameBoard.push(['x', 'o', 'x']);
gameBoard.push(['x', 'o', 'x']);
// **********************************************
// ******************* PART 4 *******************
// **********************************************
// Write a function called getTotal that accepts an array of Product types
// It should return the sum of all the products' prices
const getTotal = (products) => products.reduce((sum, curProduct) => sum + curProduct.price, 0);
const products = [];
products.push({ name: 'candy', price: 30.0 });
products.push({ name: 'cookie', price: 50 });
console.log(`total: ${getTotal(products)}`);
