// console.log(4 > 2);
// console.log(4 >= 2);
// console.log(4 < 2);
// console.log(4 == 2);
// console.log(4 != 2);

// console.log("4" > 2);
// console.log("04" > 2);

console.log(null > 0);
console.log(null == 0);
console.log(null >=0 );

//the reason is that equality check == and comparision > < >= <= work differently.
// comparisions convert null to a number, treating it as 0. 
//That's why (3)null >= 0 is true and (1) null > 0 is false.

console.log(undefined == 1); // returns false
console.log(undefined > 1); // returns false
console.log(undefined < 1); // returns false

// === strict check

console.log("2" === 2); //check conversion with datatypes
 


