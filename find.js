// ! The find() method of Array instances returns the first element in the provided array that satisfies the provided testing function. If no values satisfy the testing function, undefined is returned.
// const persons = ["Asghar", "Haris", "Talha", "Abdullah", "Talha"]
// const res = persons.find(isTalha)
// function isTalha(item) {
//     return item === 'Talha'
// }
// console.log(res);

// * Alternate way
// const res = persons.find(person => person === 'Talha')
// console.log(res);

// ^ Find some extra information of an object using find method
const persons = [
  { name: "Asghar", age: 55 },
  { name: "Haris", age: 30 },
  { name: "Talha", age: 27 },
  { name: "Zain", age: 24 },
];
const person = persons.find((person) => person.name === "Zain");
console.log(person);
console.log(person.name);
console.log(person.age);
