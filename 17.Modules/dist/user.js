"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserHelper = void 0;
class User {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }
    logout() {
        console.log(`${this.name} logggg out`);
    }
}
exports.default = User;
function UserHelper() {
    console.log("in UserHelper!!!");
}
exports.UserHelper = UserHelper;
