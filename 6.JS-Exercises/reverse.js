// ! The reverse() method of Array instances reverses an array in place and returns the reference to the same array, the first array element now becoming the last, and the last array element becoming the first. In other words, elements order in the array will be turned towards the direction opposite to that previously stated. To reverse the elements in an array without mutating the original array, use toReversed().
// const numbers = [1, 2, 3, 4, 5]
// const res = numbers.reverse()
// console.log(numbers);
// console.log(res);

// & However if we dont want to change the original array
// const numbers = [1, 2, 3, 4, 5]
// const res = numbers.concat().reverse()
// console.log(res);
// console.log(numbers);

// todo: Reversing an array using spread operator without changing the original array
// const numbers = [1, 2, 3, 4, 5]
// const res = [...numbers].reverse()
// console.log(res);
// console.log(numbers);

// ? ** Reverse the alphabets of a string
const str = "Coding is a fun!";
const res = str.split("").reverse().join("");
console.log(res);
