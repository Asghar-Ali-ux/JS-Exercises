//! Capitalize the first character of each word of a string
function capitalize(str){
   let words = str.split(" ").map(word => {
    return word.charAt(0).toUpperCase()+ word.slice(1);
   });
   return words.join(" ");
   
}
console.log(capitalize("I got up early in the morning"));
console.log(capitalize("I walked straight to the beach"));


