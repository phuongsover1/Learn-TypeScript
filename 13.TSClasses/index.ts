class Player {
  // private first: string;
  // private last: string;

  readonly score: number = 0;

  public description: string = "Player desription";
  constructor(private first: string, private last: string) {}

  get getFirst() {
    return this.first;
  }

  get getLast() {
    return this.last;
  }
}

const obj: Player = new Player("phuong", "nguyen");
// obj.score = 3; // error because score is read-only
//
obj.description = "Hello";

console.log(`first: ${obj.getFirst}, last: ${obj.getLast}`);
