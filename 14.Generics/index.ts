const nums: Array<number> = [];
const colors: Array<string> = [];

const inputEl = document.querySelector<HTMLInputElement>("#username");
console.dir(inputEl);
if (inputEl !== null) inputEl.value = "Hacked!!!";

const btn = document.querySelector<HTMLButtonElement>(".btn");

if (btn !== null) {
}

// Writing our first generics function

// instead of
function numberIndentity(item: number): number {
  return item;
}

function stringIdentity(item: string): string {
  return item;
}

function booleanIdentity(item: boolean): boolean {
  return item;
}

// we use
function identity<Type>(item: Type): Type {
  return item;
}

const number = identity<number>(3);

const test = identity<string>(true); // error
const string = identity<string>("fjdkf");
