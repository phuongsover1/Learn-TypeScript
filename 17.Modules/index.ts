import { add, sample as randomSample } from "./utils";
import TestUser, { UserHelper } from "./user";

const sample = 34334;
console.log(add(1, 2));
console.log(randomSample([1, 2, 3]));
const x: number = 3;

const obj: TestUser = new TestUser("khang", "phuongsover2@gmail.com");
obj.logout();

UserHelper();
