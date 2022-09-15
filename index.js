Arra//From decimal to Binary.

let dec = 178;
let binary = [];

while (dec > 0) {
  
  binary.unshift(dec % 2);
  dec = Math.floor(dec/2);
}console.log(binary);
 
 ////////////
 
 let bin = "10110010";
 let arr = bin.map(i=>Number(i));
 console.log(arr);
