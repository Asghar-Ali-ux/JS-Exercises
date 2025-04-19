function arraySum(arr){
  let tempArr = arr.sort((a,b) => {
    return a-b
 } )
let largestNumber = tempArr.pop()
let sumOfRemainingNumbers = 0;
tempArr.forEach(num => sumOfRemainingNumbers += num);
return largestNumber === sumOfRemainingNumbers
   
}
console.log(arraySum([15, 2, 5, 1, 4]));
console.log(arraySum([10, 2, 5, 25, 8]));


