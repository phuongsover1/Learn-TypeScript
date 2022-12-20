"use strict";

class Player {
  static description = "Player In Our Game";
  static randomPlayer() {
    return new Player("unknown", "unknown");
  }

  #score = 0;
  #numLives = 10;
  constructor(first, last) {
    this.first = first;
    this.last = last;
    this.#secret();
  }
  taunt() {
    console.log("BOOYAH!");
  }
  loseLife() {
    this.#numLives -= 1;
  }
  get fullName() {
    return `${this.first} ${this.last}`;
  }

  set fullName(newName) {
    const [first, last] = newName.split(" ");
    this.first = first;
    this.last = last;
  }
  get score() {
    return this.#score;
  }

  set score(newScore) {
    if (newScore < 0) {
      throw new Error("Score must be positive");
    }
    this.#score = newScore;
  }

  updateScore(value) {
    this.#score = value;
  }

  #secret() {
    console.log("SECRET!");
  }
}

const player1 = new Player("phuong", "nguyen");
player1.taunt();
player1.score = 483948394;
console.log(player1);
console.log(`fullName: ${player1.fullName}`);

player1.fullName = "John Doe";

console.log(`fullName: ${player1.fullName}`);

console.log(`Static variable: ${Player.description}`);

//const player2 = new Player("Khang", "nguyen");
//console.log(player2);
//player1.score();
