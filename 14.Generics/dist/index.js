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
