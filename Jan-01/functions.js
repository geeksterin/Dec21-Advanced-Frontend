console.log('🎉');


//Write a function to take a year and return true or false based on whether it is a leap year or not.

// function isLeapYear(year) {
//     //Check for 400th year
//     if(year % 400 == 0)
//         return true;

//     //Check for 100th year
//     if(year % 100 == 0)
//         return false;

//     //Check for 4th year
//     if(year % 4 == 0)
//         return true;

//     //Default case
//     return false;
// }

// console.log(isLeapYear(2022));

//Write a function to give sum of two numbers:
// function sum(a, b) {
//     return a+b;
// }

//Anonymous function.
// const sum = function(a, b) {
//     return a + b;
// }

//Arrow function
// const sum = (a, b) => {
//     return a + b;
// }

// const sum = (a, b) => a + b;

// s = sum(2, 5);
// console.log(s);

//Write a function to check whether a number is a positive number or not.

// const isPositive = num => {
//     return num > 0;
// }

// One Liner Arrow functions.
// const isPositive = num => num > 0;

// const isPositive = num => console.log(num > 0);

// console.log(isPositive(-15));

// const randomNumber = _ => Math.random();

// console.log(randomNumber());

// const fn = new Function("console.log('a')");

// fn();

//Function Instantiation
// const sum = new Function("a","b", "console.log(a+b);");
// sum(3, 5);

// eval("let a = 10; let b = 20; console.log(a+b);");

// const arr = new Array(10);
// console.log(arr);




/// IIFE

const sum = function(a, b) {
    console.log(a + b);
}
sum(1, 4);

//IIFE
(function(a, b) {
    console.log(a+b);
})(1, 4);


(function() {
    console.log("Hello Geeks");
})();

(_ => console.log("Hey Geeks 😎"))();

//It gives us security.
//First of all, it is an anonymous function. That means, no one will be able to call it.
//Second, this can only be called once. That is immediately. Not after ever again, even we cannot call it.
//The reason for this to exist is that suppose we have initialization. For example, we are writing some Network connection and have secret data and we only want to do it once.
//Because of scoping of let/var/const. The variables written inside the IIFE will not be able to access outside.

//Where to use it:
//Use it for places where we need to do initialization. Steps to be executed only ONCE!. We use IIFE for more secuity points as nobody can call this again or even get any data (variable) outside of our function.




// let a = ((10));
// console.log(a);


//Formal Parameter.
// function sum1(a, b) {console.log(a+b);}

// //Actual Parameter. (Argument)
// sum1(1, 6);

//Rest operator says it will take rest of the argument.

function s(a, b, c, ...d) {
    // console.log(a + d);
    console.log(d);
}

s(1, 2, 3, 4, 5, 6, 7, 8, 10);


//Write a function to take n number of arguments and give sum of that.

const sumAll = (...numbers) => {
    let sum = 0;
    for(let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }
    console.log(sum);
}

sumAll(1, 2, 3);
sumAll(1, 2, 5, 70, 1, 42, 1, 2, 2, 2, 2, 2, 2);
sumAll(0);
sumAll();