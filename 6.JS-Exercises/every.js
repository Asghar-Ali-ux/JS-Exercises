// ! The every() method of Array instances tests whether all elements in the array pass the test implemented by the provided function. It returns a Boolean value. **/
// let numbers = [1, 2, 3, 4, 5, -7]
// const res = numbers.every(function(num){
//     return num > 0
// })
// console.log(res);

// ^ Array of objects
// const persons = [
//   { name: "Asghar" },
//   { name: "Haris" },
//   { name: "Zain" },
//   { fname: "Abdullah" }
// ];
// const res = persons.every(function(person){
//     return person.name !== undefined
// })
// console.log(res);

// ~ Another way
// const persons = [
//     { name: "Asghar" },
//     { name: "Haris" },
//     { name: "Zain" },
//     { name: "Abdullah" },
//     { name: "Asghar" }
// ]
// const res = persons.every(person => person.name !== undefined)
// console.log(res);

// ** Check is it the array of arrays
const arrays = [[1, 2, 3], [4, 5, 6], { a: 79 }];
const res = arrays.every((arr) => Array.isArray(arr));
console.log(res);
