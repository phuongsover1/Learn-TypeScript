// Introducing to Union Types
let age: number | string = 21;
age = "23";

type UnionPoint = {
  x: number;
  y: number;
};

type UnionLocation = {
  lat: number;
  long: number;
};

let location1: UnionPoint | UnionLocation = { x: 1, y: 2 };
location1 = { lat: 34, long: 45 };

// Type Narrow with Union Types
function calculateTax(price: number | string, tax: number): number {
  if (typeof price === "string") price = parseFloat(price.replace("$", ""));
  return price * tax;
}

console.log(calculateTax(23, 0.2));
console.log(calculateTax("$23", 0.2));

// Union types and arrays
let stuff: number | string[] = 2;
stuff = ["sefsdf", "fdf"];
// stuff = [2, 3]; // error

let numberAndStrArray: (number | string)[];
numberAndStrArray = [2, 3, "dfdf"];
numberAndStrArray = ["2", "fjdkf", 2, 3];

// numberOrStrArray = 2; // error
// numberOrStrArray = 'fdfj'; // error

let numberOrStrArray: number[] | string[];

numberOrStrArray = [1, 2, 34];
numberOrStrArray = ["sf", "fdf"];
// numberOrStrArray = [1, '2323']; // error

const locations: (UnionPoint | UnionLocation)[] = [];
locations.push({ lat: 3, long: 2 });
locations.push({ x: 5, y: 6 });

// Literal types
let zero: 0 = 0;
let hi: "hi" = "hi";
// zero = 1; // error
// hi = 'HI'; // error

let mood: "happy" | "sad" = "happy";
mood = "sad";
// mood = 'sdff'; // error

type DayOfWeek =
  | "Monday"
  | "Tuesday"
  | "Wednesday"
  | "Thursday"
  | "Friday"
  | "Saturday"
  | "Sunday";
let day: DayOfWeek = "Sunday";
