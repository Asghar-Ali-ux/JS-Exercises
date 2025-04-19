//! The map() method of Array instances creates a new array populated with the results of calling a provided function on every element in the calling array. Multiply each element of an array by 5 and get another array
// const numbers = [1, 2, 3, 4, 5]
// const res = numbers.map(num => num * 5)
// console.log(res);

// ^ Double each and every element of an array
// const numbers = [1, 2, 3, 4, 5]
// const res = numbers.map(double)
// function double(value) {
//     return value * 2
// }
// console.log(res);

// ? Get multiplied a number by its index and obtain a new array
// const array = [1, 2, 3, 4, 5]
// const res = array.map((num, index) => num * index)
// console.log(res);

// & Real life example
const products = [
  {
    name: "laptop",
    price: 1000,
    count: 5,
  },
  {
    name: "desktop",
    price: 1500,
    count: 2,
  },
  {
    name: "phone",
    price: 500,
    count: 10,
  },
];
let total = 0;
const res = products.map((item) => {
  let itemPrice = item.price * item.count;
  return (total = total + itemPrice);
});
console.log(total);
