function triple(value: number | string) {
  if (typeof value === "string") return value.repeat(3);
  return value * 3;
}

const el = document.getElementById("idk");
if (el) {
  el;
} else {
  el;
}

// EQUALITY NARROWING
function someFunc(x: string | number, y: string | boolean): void {
  if (x === y) {
    x.toUpperCase();
    y.toUpperCase();
  }
}

// 'IN' NARROWING
interface Movie {
  title: string;
  duration: number;
}

interface TVShow {
  title: string;
  numEpisodes: number;
  episodeDuration: number;
}

function getRuntime(media: Movie | TVShow): number {
  if ("numEpisodes" in media) {
    return media.numEpisodes * media.episodeDuration; // TS convert force 'media' to 'TVShow' automatically
  }
  return media.duration;
}

// instanceof narrowing
function printFullDate(date: string | Date): void {
  if (date instanceof Date) {
    console.log(date.toUTCString());
  } else {
    console.log(new Date(date).toUTCString());
  }
}

class User {
  constructor(public username: string) {}
}

class Company {
  constructor(public name: string) {}
}

function printName(entity: User | Company) {
  // use one of two approaches below
  // if ('username' in entity) {
  //   entity;
  // }
  if (entity instanceof User) {
    entity;
  } else {
    entity;
  }
}
