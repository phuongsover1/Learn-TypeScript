export function add(x: number, y: number): number {
  return x + y;
}

export function sample<T>(arr: T[]): T {
  const randomIndex = Math.floor(Math.random() * arr.length);
  return arr[randomIndex];
}

const x: number = 1;
