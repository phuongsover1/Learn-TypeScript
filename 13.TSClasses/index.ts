class Player {
  // private first: string;
  // private last: string;

  // readonly score: number = 0;

  public description: string = "Player desription";
  constructor(
    private first: string,
    private last: string,
    private _score: number
  ) {}

  get getFirst() {
    return this.first;
  }

  get getLast() {
    return this.last;
  }

  get fullName(): string {
    return `${this.first} ${this.last}`;
  }

  get score() {
    return this._score;
  }

  set score(newScore: number) {
    if (newScore < 0) throw new Error("Score must be greater than 0");
    this._score = newScore;
  }
}

const obj: Player = new Player("phuong", "nguyen", 12);
console.log(obj.score);
obj.score = -4545; // error

class SuperPlayer extends Player {
  public isAdmin: boolean = true;

  maxScore() {
    this._score = 999999;
  }
}
