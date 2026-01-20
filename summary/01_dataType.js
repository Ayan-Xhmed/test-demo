// Primitive
// 7 types : String, Number, Boolean, Null, Undefined, Symbol, BigInt
const score = "100"
const scoreValue = 100.3
const isLoggedIn = false
const outSideTemp = null
const userEmail = undefined;
const id = Symbol('1116');
const bigNumber = 3553515434318n

// Reference (Non primitive)
// Array, Object, Functions
const heros = ["shaktiman", "naagraj", "doga"]
let myObj ={
    name: "ayan",
    age:21
}
const myFunction = function(){
    console.log("Hello world");    
}

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//there are two types of memory
//      1.Stack       2.Heap
//use   Primitive     Non-Primitive
//      Copy          Reference

// Example stack
let id1 = 4821
let id2 = id1
id2 = 7821
console.log(id1);
console.log(id2);

//Example of Heap
let user1 = {
    name : "ayan",
    id : 4821
}
let user2 = user1
user2.id = 7821
console.log(user1)
console.log(user2)



