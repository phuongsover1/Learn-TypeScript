class Player {
  // private first: string;
  // private last: string;

  // readonly score: number = 0;

  public description: string = "Player desription";
  constructor(
    private first: string,
    private last: string,

    protected _score: number
  ) {}

  get getFirst() {
    return this.first;
  }

  get getLast() {
    return this.last;
  }

  get fullName(): string {
    return `${this.first} ${this.last}`;
  }

  get score() {
    return this._score;
  }

  set score(newScore: number) {
    if (newScore < 0) throw new Error("Score must be greater than 0");
    this._score = newScore;
  }
}

const obj: Player = new Player("phuong", "nguyen", 12);
console.log(obj.score);
// obj.score = -4545; // error

class SuperPlayer extends Player {
  public isAdmin: boolean = true;

  maxScore() {
    this._score = 999999;
  }
}

interface Colorful {
  color: string;
}

interface Printable {
  print(): void;
}

class Bike implements Colorful {
  constructor(public color: string) {}
}

class Jacket implements Colorful, Printable {
  constructor(public brand: string, public color: string) {}
  print(): void {
    console.log(`${this.brand} ${this.color} jacket`);
  }
}

const jacket1 = new Jacket("Gucci", "red");

abstract class Employee {
  constructor(public first: string, public last: string) {}
  abstract getPay(): number;
  greet() {
    console.log("HELLO!");
  }
}

class FullTimeEmployee extends Employee {
  constructor(first: string, last: string, private salary: number) {
    super(first, last);
  }
  getPay(): number {
    return this.salary;
  }
}

class PartTimeEmployee extends Employee {
  constructor(
    first: string,
    last: string,
    private hourlyRate: number,
    private hoursWorked: number
  ) {
    super(first, last);
  }
  getPay(): number {
    return this.hourlyRate * this.hoursWorked;
  }
}

// new Cat();
const betty = new FullTimeEmployee("Betty", "White", 95000);

const bill = new PartTimeEmployee("Bill", "Billerson", 24, 1100);

console.log(betty.getPay());
console.log(bill.getPay());
