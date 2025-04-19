// ! The includes() method of Array instances determines whether an array includes a certain value among its entries, returning true or false as appropriate.
// const names = ['Asghar', 'Abdullah', 'Arqam']
// const res = names.includes('Arqam')
// const res1 = names.includes('Anam')
// console.log(res);
// console.log(res1);

// ^ Real life example
const fruits = ["Apple", "Mango", "Orange"];
const res = fruits.includes("Mango");
if (res) {
  console.log("Yuppy...");
} else {
  console.log("Sad... Let's buy orange.");
}
