//! The filter() method of Array instances creates a shallow copy of a portion of a given array, filtered down to just the elements from the given array that pass the test implemented by the provided function. Shallow copy means it does not change the original array.
// const numbers = [1, 2, 3, 4, 5]
// const res = numbers.filter(item => item > 2)
// console.log(numbers);
// console.log(res);

// ^ Create array from a given array which includes only even numbers and an array of odd numbers.
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// const even = numbers.filter(item => (item % 2 == 0))
// const odd = numbers.filter(item => item % 2 !== 0)
// console.log('Even Numbers = ');
// console.log( even);
// console.log(odd);

// ~ Another way by defining a separate function
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8]
// const even = numbers.filter(isEven)
// const odd = numbers.filter(isOdd)
// function isEven(value) {
//     return value % 2 == 0
// }
// function isOdd(value) {
//     return value % 2 !== 0
// }
// console.log(even);
// console.log(odd);

// ! We have an array of objects and we want to find the names of the persons who are adults
// const persons = [
//     { name: 'Asghar', age: 55 },
//     { name: 'Haris', age: 17 },
//     { name: 'Danish', age: 15 },
//     { name: 'Zain', age: 24 }
// ]
// const adults = persons.filter(person => person.age > 18)
// const adultName = adults.map(adult => adult.name)
// console.log(adults);

// console.log(adultName);

// & Remove all the duplicate numbers in the given array
// const nums = [1, 2, 3, 4, 2, 4, 3, 1, 5, 6]
// const distinctNumbers = nums.filter((value, index, arr) => arr.indexOf(value) === index)
// console.log(distinctNumbers);

// todo: Better way
// const numbers = [1, 2, 3, 4, 2, 4, 3, 1, 5, 6];
// const selectedNumbers = [...new Set(numbers)]
// console.log(selectedNumbers);
