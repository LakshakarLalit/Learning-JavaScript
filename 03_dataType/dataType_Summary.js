// Data types = There are two types of data in java Script
// 1. Primitive
// 2. Non-Primitive / Reference

// Primitive = 7 types

// 1- String, 2- Number, 3- Boolean, 4- Null, 5- Undefined, 6- Symbol, 7- BigInt


// const score = 100;              Number
// const scoreValue = 100.3;       Number

// const userEmail = false;        Boolean
// const outSideTemp = null;       Null
// let userEmail;                  Undefined
// const id = Symbol('123');       Symbol
// let name = "Frozen";            String
// const bigNumber = 134813241433n;    BigInt


// Reference (Non-Primitive)

// 1- Array, 2- Objects, 3- Functions

// Array
// const villan = ["taatybicchu", "omphatsuaaha", "mugembo"]; 

// Object
// let myObject = {
//     name: "lalantop",                               
//     age: 22,
// }

// Function
// const myFun = function(){
//     console.log("Hello");
// }

// -------------------------------------------
//
// Memory
// Stack (Primitive), Heap (Non-Primitive)

let myYoutubeName = "kalijaanuhai";
let anName = myYoutubeName;
anName = "Sorrybabu";

console.log(myYoutubeName);
console.log(anName);

// Stack = make a copy of the data and assign the another variable

// Heap = Not copy data, data store somewhere and indicate the address 