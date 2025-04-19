// ! The reduce() method of an Array instances executes a user-supplied "reducer" callback function on each element of the array, in order, passing in the return value from the calculation on the preceding element. The final result of running the reducer across all elements of the array is a single value. The first time that the callback is run there is no "return value of the previous calculation". If supplied, an initial value may be used in its place. Otherwise the array element at index 0 is used as the initial value and iteration starts from the next element (index 1 instead of index 0). Add the elements of an array using reduce method
// const numbers = [1, 2, 3, 4, 5]
// const total = numbers.reduce(sum)
// function sum(accumulator, value) {
//     return accumulator + value;
// }
// console.log(total);

// ! A better way of reduce function
// const numbers = [1, 2, 3, 4, 5];
// const result = numbers.reduce((acc, curr)=> acc + curr, 0)
// console.log(result);

// ^ Get Product of all values of an array
// const numbers = [1, 2, 3, 4, 5];
// const result = numbers.reduce((acc, curr)=> acc * curr, 1)
// console.log(result);

// ~ Another way of product
// const numbers = [1, 2, 3, 4, 5]
// const total = numbers.reduce(product, 1)
// function product(accumulator, value) {
//     return accumulator * value
// }
// console.log(total);

// ~ Get maximum value of an array
// const numbers = [1, 2, 3, 4, 5, 10, 120, 12, 11, 14];
// const sortedNumbers = numbers.sort((a, b) => a - b);
// console.log(sortedNumbers[numbers.length - 1]);

// todo: Another way of finding maximum value
// const numbers = [1, 2, 3, 4, 5, 10]
// const maximum = numbers.reduce(max, -Infinity)
// function max(accumulator, value) {
//     if (accumulator > value) {
//         return accumulator
//     } else {
//         return value
//     }
// }
// console.log(maximum);

// ! Better way
// const numbers = [1, 2, 3, 124, 5, 10];
// const maximumValue = numbers.reduce((acc, curr)=>{
//     if(acc > curr){
//         return acc
//     }else{
//         return curr
//     }
// })
// console.log(maximumValue);

// & Get the total price of each commodity with the current stock
const store = [
  {
    name: "Laptop",
    price: 1000,
    count: 4,
  },
  {
    name: "Desktop",
    price: 1500,
    count: 3,
  },
  {
    name: "Iphone",
    price: 2500,
    count: 3,
  },
];
const res = store.reduce((acc, item) => acc + (item.price + item.count), 0);
console.log(res);
