"use strict";
class Player {
    constructor(first, last, _score) {
        this.first = first;
        this.last = last;
        this._score = _score;
        this.description = "Player desription";
    }
    get getFirst() {
        return this.first;
    }
    get getLast() {
        return this.last;
    }
    get fullName() {
        return `${this.first} ${this.last}`;
    }
    get score() {
        return this._score;
    }
    set score(newScore) {
        if (newScore < 0)
            throw new Error("Score must be greater than 0");
        this._score = newScore;
    }
}
const obj = new Player("phuong", "nguyen", 12);
console.log(obj.score);
class SuperPlayer extends Player {
    constructor() {
        super(...arguments);
        this.isAdmin = true;
    }
    maxScore() {
        this._score = 999999;
    }
}
class Bike {
    constructor(color) {
        this.color = color;
    }
}
class Jacket {
    constructor(brand, color) {
        this.brand = brand;
        this.color = color;
    }
    print() {
        console.log(`${this.brand} ${this.color} jacket`);
    }
}
const jacket1 = new Jacket("Gucci", "red");
class Employee {
    constructor(first, last) {
        this.first = first;
        this.last = last;
    }
    greet() {
        console.log("HELLO!");
    }
}
class FullTimeEmployee extends Employee {
    constructor(first, last, salary) {
        super(first, last);
        this.salary = salary;
    }
    getPay() {
        return this.salary;
    }
}
class PartTimeEmployee extends Employee {
    constructor(first, last, hourlyRate, hoursWorked) {
        super(first, last);
        this.hourlyRate = hourlyRate;
        this.hoursWorked = hoursWorked;
    }
    getPay() {
        return this.hourlyRate * this.hoursWorked;
    }
}
const betty = new FullTimeEmployee("Betty", "White", 95000);
const bill = new PartTimeEmployee("Bill", "Billerson", 24, 1100);
console.log(betty.getPay());
console.log(bill.getPay());
