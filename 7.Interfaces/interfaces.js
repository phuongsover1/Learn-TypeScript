"use strict";
const loc = {
    x: 1,
    y: 2,
};
const Nick = {
    name: 'Nick',
    age: 18,
    sayHi() {
        console.log(`Hi, my name is ${this.name}`);
    },
};
const Phuong = {
    name: 'Phuong',
    age: 22,
    nickname: 'Cuong',
    sayHi() {
        console.log(`Hi, my name is ${this.name}`);
    },
};
const temp = {
    name: 'Phuong',
    say() {
        console.log(`Hi my name is ${this.name}`);
    },
};
Nick.sayHi();
Phuong.sayHi();
temp.name;
temp.say();
const shoes = {
    name: 'Blue Suede Shoes',
    price: 100,
    applyDiscount(amount) {
        const newPrice = this.price * (1 - amount);
        this.price = newPrice;
        return this.price;
    },
};
const shoesType = {
    name: 'Blue Suede Shoes',
    price: 100,
    applyDiscount(amount) {
        const newPrice = this.price * (1 - amount);
        this.price = newPrice;
        return this.price;
    },
};
console.log(shoes.applyDiscount(0.1));
console.log(shoesType.applyDiscount(0.2));
