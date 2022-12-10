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
