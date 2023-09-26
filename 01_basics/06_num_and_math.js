const score = 400
// console.log(score);

const balance = new Number(100)
// console.log(balance);

// console.log(balance.toString().length);
// console.log(balance.toFixed(1));

const otherNumber = 123.8966

// console.log(otherNumber.toPrecision(4));

const hundreds = 1000000 //1,000,000
// console.log(hundreds.toLocaleString('en-IN'));

// +++++++++++++ Maths +++++++++++++++++++++++++++++

// console.log(Math); //Object
// console.log(Math.abs(-4)); // 4
// console.log(Math.round(4.6)); // 4
// console.log(Math.ceil(4.2)); // 5
// console.log(Math.floor(4.9)); // 4
// console.log(Math.min(4, 3, 6, 8)); // 3
// console.log(Math.max(4, 3, 6, 8)); // 8

console.log(Math.random()); // it gives values between 0,1
console.log((Math.random()*10) + 1);  
console.log(Math.floor(Math.random()*10) + 1);

const min = 10
const max = 20
/*
floor value of the output;
Math.random() = 0-1;
(max - min + 1) = 11;
0.5 * 11 = 5.5 + 1
*/
console.log(Math.floor(Math.random() * (max - min + 1)) + min)