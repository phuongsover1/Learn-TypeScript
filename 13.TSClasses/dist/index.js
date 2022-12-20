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
obj.score = -4545;
