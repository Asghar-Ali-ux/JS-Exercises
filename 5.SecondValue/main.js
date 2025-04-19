function secondValue(arr) {
  let values = [...new Set(arr)].sort(function(a, b){
    return a - b
  })
if(values.length < 2){
  return `${values[0]}`
}else if(values.length ===2){
  return `${values[0]}, ${values[1]}`;
}else if(values.length>2){
  return `${values[1]}, ${values[values.length - 2]}`;
}
}
console.log(secondValue([10]));
console.log(secondValue([2, 4]));
console.log(secondValue([7,6,4]));
console.log(secondValue([12, 14, 2, 1, 5, 4, 7]));
console.log(secondValue([2, 4, 2, 1, 5, 4, 7]));



