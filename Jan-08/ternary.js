console.log('☀');

//Ternary is an alternate to if else condition.
//It can be used but should not be used everywhere.
//If we have a condition and based on the condition we are saving something to a variable. Then we should be using ternary operator. That is the ideal usecase for that.

//Unary Operators (It takes 1 operand) -> NOT Operator. Pre/Post increment/decrement.
//Binary Operator (It takes 2 operands) -> comparison, equal to.
//Ternary Operators (It takes 3 operants) -> ?:

// <condition> ? <true> : <false>

// let a = 15;

// (a >= 10) ? console.log('a is greater than 10') : console.log('a is not greater than 10');

// if(a >= 10) {
//     console.log('Greater');
// } else {
//     console.log('Not greater');
// }


// let age = 19;

// let isAdult = (age >= 18) ? true : false;

// console.log(isAdult);


//Get the greater of 2 numbers.
const a = 106;
const b = 20;
const c = 350;

const max = (a > b) ? ((a > c) ? a : c) : ((b > c) ? b : c);

console.log(max);
