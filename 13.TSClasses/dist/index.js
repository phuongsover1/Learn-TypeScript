"use strict";
class Player {
    constructor(first, last) {
        this.first = first;
        this.last = last;
        this.score = 0;
        this.description = "Player desription";
    }
    get getFirst() {
        return this.first;
    }
    get getLast() {
        return this.last;
    }
}
const obj = new Player("phuong", "nguyen");
obj.description = "Hello";
console.log(`first: ${obj.getFirst}, last: ${obj.getLast}`);
