// ! The Array.from() static method creates a new, shallow-copied Array instance from an iterable or array-like object.
// * We want to convert a string to an array of numbers
// const str = '12345678';
// const res = Array.from(str, mapfn)
// function mapfn(x) {
//     return Number(x)
// }
// console.log(res);

// ^ Another way
// const str = '12345678';
// const res = Array.from(str, x => Number(x))
// console.log(res);

// ^ Another way
// const str = '46657767375';
// const res = Array.from(str, Number)
// console.log(res);

//! Remove all the duplicate values from an array
// const numbers = [1, 2, 3, 4, 2, 4, 5, 2, 3, 1]
// const res1 = [...new Set(numbers)]
// const res = new Set(numbers)
// const newArray = Array.from(res)
// console.log(res);
// console.log(newArray);
// console.log(res1);

// ! Remove the duplicate strings from an array
const friends = ["Asghar", "Haris", "Zain", "Asghar", "Haris"];
const distinctFriends = Array.from(new Set(friends));
// const distinctFriends = [...new Set(friends)]

console.log(distinctFriends);
