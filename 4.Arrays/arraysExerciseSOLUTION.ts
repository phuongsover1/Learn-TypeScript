// **********************************************
// ******************* PART 1 *******************
// **********************************************
// Create an empty array of numbers called "ages":
const ages: [] = [];

// **********************************************
// ******************* PART 2 *******************
// **********************************************
// Create an array variable called gameBoard that starts as an empty array.
// It should be typed to hold a 2 dimensional array of strings
const gameBoard: string[][] = [];
gameBoard.push(['x', 'o', 'x']);
gameBoard.push(['x', 'o', 'x']);

// **********************************************
// ******************* PART 3 *******************
// **********************************************
// Create a Product type that contains a name and a price.
// An example product could be:
// {name: "coffee mug", price: 11.50}
type Product = {
  name: string;
  price: number;
};

// **********************************************
// ******************* PART 4 *******************
// **********************************************
// Write a function called getTotal that accepts an array of Product types
// It should return the sum of all the products' prices
const getTotal = (products: Product[]): number =>
  products.reduce((sum, curProduct) => sum + curProduct.price, 0);

const products: Product[] = [];
products.push({ name: 'candy', price: 30.0 });
products.push({ name: 'cookie', price: 50 });
console.log(`total: ${getTotal(products)}`);
