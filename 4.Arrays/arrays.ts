// Working with Array Types
// declaring an unmodified empty array
const emptyArr: [] = [];
// emptyArr.push('fdkfj'); // error
// emptyArr.push(123); // error

const activeUsers: string[] = [];
activeUsers.push('Phuong');
activeUsers.push('Khang');
activeUsers.push('Long');
// activeUsers.push(123); //error
activeUsers.push('Luu', 'Thing');
console.log(activeUsers);

const ageList: number[] = [];
ageList.push(21);
ageList.push(3, 4, 5, 6);
console.log(ageList);

// More Array syntax

type Point = {
  x: number;
  y: number;
};

const points: Array<Point> = [];
// const points: Point[] = [];
points.push({ x: 2, y: 3 });
// points.push({x:3}); // error
// points.push({y:3}); // error
console.log(points);
