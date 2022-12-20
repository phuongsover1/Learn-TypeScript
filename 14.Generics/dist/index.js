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
const test = identity(true);
const string = identity("fjdkf");
