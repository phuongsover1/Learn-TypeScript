'use strict';

class Player {
  score = 0;
  numLives = 10;
  constructor(first, last) {
    this.first = first;
    this.last = last;
  }
  taunt() {
    console.log('BOOYAH!');
  }
  loseLife() {
    this.numLives -= 1;
  }
}

const player1 = new Player('phuong', 'nguyen');
player1.taunt();
console.log(player1);

const player2 = new Player('Khang', 'nguyen');
console.log(player2);
