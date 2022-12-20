class Player {
  private first: string;
  private last: string;

  readonly score: number = 0;

  public description: string = "Player desription";

  constructor(first: string, last: string) {
    this.first = first;
    this.last = last;
  }
}

const obj: Player = new Player("phuong", "nguyen");
// obj.score = 3; // error because score is read-only
//
obj.description = "Hello";
