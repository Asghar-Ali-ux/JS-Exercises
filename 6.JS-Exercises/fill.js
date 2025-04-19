// ! The JavaScript Array fill() Method fills a given range of array elements with the given value. This method is used to manipulate the existing array according to our needs.
// const numbers = [1, 2, 3, 4, 5]
// numbers.fill(10)
// console.log(numbers);

// ^ We can give first index and last index to be filled. last index is not included.
// const numbers1 = [1, 2, 3, 4, 5]
// numbers1.fill(8, 1, 4)
// console.log(numbers1);

// ~ Create an array of length n of empty with function togather with using fill and map functions
function fillInNumbers(n) {
  return Array(n)
    .fill(101)
    .map((item, index) => {
      return item + index;
    });
}
console.log(fillInNumbers(3));
