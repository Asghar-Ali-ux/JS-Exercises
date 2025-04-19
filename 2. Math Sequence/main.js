// todo Check wether a given array of numbers is an Arithmetic or Geometric sequence or none of these.
function mathSequences(arr){
    let Arithmetic = new Set();
    let Geometric = new Set();      
    for(let i=1; i<arr.length; i++){
        let number1= arr[i]-arr[i-1];
        Arithmetic.add(number1);               
        let number2= arr[i]/arr[i-1];
        Geometric.add(number2);
    }
   if(Arithmetic.size === 1){
    return 'Arithmetic Sequence';
   } 
   if(Geometric.size === 1){
    return 'Geometric Progression';
   }
   return 'It in neither Arithmetic nor Geometric Sequence';    
}
console.log(mathSequences([2,4,6,8]))
console.log(mathSequences([1,3,9,27]))
console.log(mathSequences([2,4,8,16]))
console.log(mathSequences([2,5,8,11]))
console.log(mathSequences([2,5,10,11]))