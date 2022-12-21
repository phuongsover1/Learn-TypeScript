export default class User {
  constructor(public name: string, public email: string) {}
  logout() {
    console.log(`${this.name} logggg out`);
  }
}
export function UserHelper() {
  console.log("in UserHelper!!!");
}
