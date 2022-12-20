"use strict";
const nums = [];
const colors = [];
const inputEl = document.querySelector("#username");
console.dir(inputEl);
if (inputEl !== null)
    inputEl.value = "Hacked!!!";
const btn = document.querySelector(".btn");
if (btn !== null) {
}
function numberIndentity(item) {
    return item;
}
function stringIdentity(item) {
    return item;
}
function booleanIdentity(item) {
    return item;
}
function identity(item) {
    return item;
}
const number = identity(3);
const string = identity("fjdkf");
function getRandomElement(list) {
    const randomIndex = Math.floor(Math.random() * list.length);
    return list[randomIndex];
}
console.log(getRandomElement(["a", "b", "c"]));
console.log(getRandomElement([1, 4, 2, 5]));
console.log(getRandomElement([true, false]));
const genericArrow = (list) => {
    const randomIndex = Math.floor(Math.random() * list.length);
    return list[randomIndex];
};
genericArrow([1, 2, 34, 4]);
function merge(obj1, obj2) {
    return Object.assign(Object.assign({}, obj1), obj2);
}
console.log(merge({ name: "Phuong" }, { number: 9 }));
console.log(merge({ name: "phuong" }, { pets: ["dog", "cat"] }));
