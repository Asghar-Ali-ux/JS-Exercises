// ! The indexOf() method of Array instances returns the first index at which a given element can be found in the array, or -1 if it is not present.
// ^ Find the index of an element
// const people = ['Asghr', 'Haris', 'Zain']
// const res = people.indexOf('Zain')
// const res1 = people.indexOf('Abdullah')
// console.log(res);
// console.log(res1);

// ~ Replace an element of an array
// const people = ['Asghr', 'Haris', 'Zain']
// const idx = people.indexOf('Zain')
// people[idx] = 'Arqam'
// console.log(people);

// ** lastIndexOf and indexOf returns the first element in the array
const people = ["Asghr", "Haris", "Zain", "Haris", "Abdullah"];
const res = people.lastIndexOf("Haris");
const res1 = people.indexOf("Haris");
console.log(res);
console.log(res1);
