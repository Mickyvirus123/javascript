// Primitive

// 7 types : String, number, boolean, null, undefined, symbol, bigInt

const score = 100  // number
const scoreValue = 100.3  // number

const isLoggedIn = false  // boolean
const outSideTemp = null  // object
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123') 
console.log(id === anotherId);   // symbol

const bigNumber = 7672676767657576n

// Reference type (non primitive)

// Array, objects, functions

const heros = ["shaktiman", "naagraaj", "doga"];
let myObj = {
    name: "ali",
    age: 24,
}

const myFunction = function(){
    console.log("hello world");
    
}

console.log(typeof anotherId);


// ==========================================================

// Stack (Primitive), always return a copy 
//  Heap (non primitive) always return a reference

let myCollegeName = "Mewatengineeringcollege"

let anotherName = myCollegeName
anotherName = "bhkkkbudbak"

console.log(myCollegeName);

console.log(anotherName);


let userOne = {
    email: "user@ybl.com",
    upi: "user@ybl"
}

let userTwo = userOne

userTwo.email = "ali@ybl.com"

console.log(userOne.email);
console.log(userTwo.email);

