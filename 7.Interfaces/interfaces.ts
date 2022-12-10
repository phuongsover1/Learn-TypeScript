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
