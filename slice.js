// ! The slice() method of Array instances returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included) where start and end represent the index of items in that array. The original array will not be modified.
// const numbers = [1, 2, 3, 4, 5]
// const res = numbers.slice(0, 3)
// console.log(numbers);
// console.log(res);
// &
// const numbers = [1, 2, 3, 4, 5]
// const res = numbers.slice(2, 4)
// console.log(numbers);
// console.log(res);

// ~ If we provide negative number, so to get last three elements we use -3.
// const numbers = [1, 2, 3, 4, 5]
// const res = numbers.slice(-3)
// console.log(numbers);
// console.log(res);

// todo: If we want to get all the numbers execpt some particular number
const numbers = [1, 2, 3, 4, 5];
const res = numbers.slice(2);
console.log(res);
