// primitive 

// 7 types : String , Number, Boolean, null, undefined, symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

//const bigNumber = 3456789101112n


// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["sharukh","salman"," varun"]
let myObj = {
    name:"Sanchit",
    age: 20,
}

const myFunction = function(){
    console.log("hello world");
}
console.log ( typeof scoreValue);

// https://262.ecma-international.org/5.1/#sec-11.4.3


// ***************************************************

// Stack(primitive), Heap(Non-primitive)

let myChanelname = "Sanchit.com"

let anothername = myChanelname
anothername = "my chanel"

console.log(myChanelname);
console.log(anothername);

let userOne = {
    email:"user@xyz.com",
    upi:"user@xyz"
}

let userTwo = userOne
userTwo.email="sanchit@xyz.com"

console.log(userOne.email);
console.log(userOne.email);
