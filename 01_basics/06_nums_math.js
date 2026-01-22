const score = 400
console.log(score);

const balance = new Number(100);
console.log(balance);

//Some property
// Number {100}
// [[Prototype]]
// : 
// Number
// constructor
// : 
// ƒ Number()
// toExponential
// : 
// ƒ toExponential()
// toFixed
// : 
// ƒ toFixed()
// toLocaleString
// : 
// ƒ toLocaleString()
// toPrecision
// : 
// ƒ toPrecision()
// toString
// : 
// ƒ toString()
// valueOf
// : 
// ƒ valueOf()
// [[Prototype]]
// : 
// Object
// [[PrimitiveValue]]
// : 
// 0
// [[PrimitiveValue]]
// : 
// 100

console.log(balance.toString);
console.log(balance.toString());
console.log(typeof balance.toString());
console.log(typeof balance);

console.log(balance.toString().length);
console.log(balance.toFixed(1));

const otherNumber = 123.7966
console.log(otherNumber.toPrecision(4));

const hundreds = 1000000
console.log(hundreds.toLocaleString('en-IN'));

//++++++++++++++++++++++++++++++++++++++++++++++++++++++
console.log(Math);
console.log(Math.abs(-4));
console.log(Math.round(4.3));
console.log(Math.round(4.7));
console.log(Math.ceil(4.2));
console.log(Math.floor(4.9));
console.log(Math.min(4,5,9,3,8,1,2,7));

console.log(Math.random());
console.log((Math.random()*10)+1);
console.log(Math.floor(Math.random()*10)+1);
const min = 10
const max = 20
console.log(Math.floor(Math.random()*(max-min+1))+min);
console.log(Math.floor(Math.random()*6-1+1)+1);