// ! The join() method of Array instances creates and returns a new string by concatenating all of the elements in this array, separated by commas or a specified separator string. If the array has only one item, then that item will be returned without using the separator.
const countries = ["Pakistan", "India", "China"];
const res = countries.join();
const res1 = countries.join("*");
const res2 = countries.join(", ");
const res3 = countries.join(" - ");
const res4 = countries.join("");
console.log(res);
console.log(res1);
console.log(res2);
console.log(res3);
console.log(res4);
