// A function with an object type parameter
const printName = (name: { first: string; last: string }): void => {
  console.log(`Name: ${name.first} ${name.last}`);
};

printName({ first: 'Phuong', last: 'Nguyen' });
