// ! The forEach() method of Array instances executes a provided function once for each array element.
// Print all the elements of an array
// const array = [1, 2, 3, 4, 5]
// array.forEach(num => console.log(num))

// ^ To get double of all the numbers of an array
// const array = [1, 2, 3, 4, 5]
// array.forEach(num => console.log(num * 2))

// & Find the sum of the numbers from an array
// const numbers = [1, 2, 3, 4, 5]
// let sum = 0
// numbers.forEach(num => sum = sum + num)
// console.log(sum);

// ! Reduce method to find the sum of an array
// const numbers = [1, 2, 3, 4, 5];
// const sum = numbers.reduce((acc, curr) => acc + curr, 0)
// console.log(sum);

// * Count the number of occurrences of an element in an array
// ! Could not understand
// const letters = ['a', 'b', 'c', 'a', 'b', 'c', 'b', 'b'];
// let count = {};
// letters.forEach(item => {
//     if (count[item]) {
//         count[item]++
//     } else {
//         count[item] = 1
//     }
// })
// console.log(count);

// ! Another way
const arr = ["apple", "banana", "apple", "orange", "banana", "apple"];

const count = arr.reduce((acc, val) => {
  return val === "apple" ? acc + 1 : acc;
}, 0);

console.log(count); // Output: 3
