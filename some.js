// ! The some() method of Array instances tests whether at least one element in the array passes the test implemented by the provided function. It returns true if, in the array, it finds an element for which the provided function returns true; otherwise it returns false. It doesn't modify the array.
// const numbers = [1, 2, 3, 4, 5]
// const res = numbers.some(greaterThanFour)
// function greaterThanFour(num) {
//     return num > 5
// }
// console.log(numbers);
// console.log(res);

// ? Another way
// const numbers = [1, 2, 3, 4, 5];
// const res = numbers.some(function(num){
//     return num > 4
// })
// console.log(numbers);
// console.log(res);

// todo: Real time example
const workers = [
  {
    name: "Asghar",
    age: 19,
  },
  {
    name: "Faree",
    age: 15,
  },
  {
    name: "Abdullah",
    age: 16,
  },
];
const res = workers.some((item) => item.age > 18);
console.log(res);
