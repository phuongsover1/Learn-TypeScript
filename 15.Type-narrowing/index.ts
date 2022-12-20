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
