import { add, sample as randomSample } from "./utils";
import TestUser, { UserHelper } from "./user";
import type Person from "./types";
import { type Animals } from "./types";

const sample = 34334;
console.log(add(1, 2));
console.log(randomSample([1, 2, 3]));
const x: number = 3;

const obj: TestUser = new TestUser("khang", "phuongsover2@gmail.com");
obj.logout();

UserHelper();

const abc: Person = {
  name: "Phuong",
  age: 22,
};

const cat: Animals = "Cat";
