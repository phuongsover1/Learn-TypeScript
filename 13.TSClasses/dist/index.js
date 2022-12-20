"use strict";
class Player {
    constructor(first, last) {
        this.score = 0;
        this.description = "Player desription";
        this.first = first;
        this.last = last;
    }
}
const obj = new Player("phuong", "nguyen");
obj.description = "Hello";
