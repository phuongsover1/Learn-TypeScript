// Introducing to interfaces
interface PointInterface {
  x: number;
  y: number;
}

const loc: PointInterface = {
  x: 1,
  y: 2,
};

// Optional and read-only properties in interfaces.
interface Person {
  readonly name: string;
  age: number;
  nickname?: string;
  // sayHi: () => void;
  sayHi(): void;
}

const Nick: Person = {
  name: 'Nick',
  age: 18,
  sayHi(): void {
    console.log(`Hi, my name is ${this.name}`);
  },
};

const Phuong: Person = {
  name: 'Phuong',
  age: 22,
  nickname: 'Cuong',
  sayHi(): void {
    console.log(`Hi, my name is ${this.name}`);
  },
};

type Test = {
  say: () => void;
  name: string;
};

const temp: Test = {
  name: 'Phuong',
  say(): void {
    console.log(`Hi my name is ${this.name}`);
  },
};
Nick.sayHi();
Phuong.sayHi();
temp.name;
temp.say();

// Interface method parameters
interface ProductInterface {
  name: string;
  price: number;
  applyDiscount(discount: number): number;
}

type ProductType = {
  name: string;
  price: number;
  applyDiscount(discount: number): number;
};

const shoes: ProductInterface = {
  name: 'Blue Suede Shoes',
  price: 100,
  applyDiscount(amount: number) {
    const newPrice = this.price * (1 - amount);
    this.price = newPrice;
    return this.price;
  },
};

const shoesType: ProductType = {
  name: 'Blue Suede Shoes',
  price: 100,
  applyDiscount(amount: number) {
    const newPrice = this.price * (1 - amount);
    this.price = newPrice;
    return this.price;
  },
};

console.log(shoes.applyDiscount(0.1));
console.log(shoesType.applyDiscount(0.2));

// Reopen Interface
interface Dog {
  name: string;
  age: number;
}

interface Dog {
  breed: string;
  bark(): string;
}
const elton: Dog = {
  name: 'elton',
  age: 1,
  breed: 'Husky',
  bark() {
    return 'Woff Woff!';
  },
};

// Extending interfaces
interface ServiceDog extends Dog {
  job: 'guide dog' | 'drug sniffer' | 'bomb';
}

const chewy: ServiceDog = {
  name: 'chewy',
  age: 2,
  breed: 'Husky',
  bark() {
    return 'Woff Woff woff!';
  },
  job: 'guide dog',
};

// Multiple inheritance interfaces.
interface Human {
  name: string;
}

interface Employee {
  readonly id: number;
  email: string;
}

interface Engineer extends Human, Employee {
  level: string;
  languages: string[];
}

const phuong: Engineer = {
  name: 'phuong',
  id: 1,
  email: 'phuongsover2@gmail.com',
  level: 'fresher',
  languages: ['Java', 'JS'],
};
