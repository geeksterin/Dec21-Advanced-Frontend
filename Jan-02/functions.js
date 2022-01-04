console.log('😎');



//Pass by Value (Call by Value) and Pass by Reference (Call by Reference).
//Pass by value will fetch the value from the memory and send the exact value.
//Pass by reference (is lazy), it will directly send the memory location only. 
//Because of this, if we change inside the function, the main memory content will be changed!

// function increaseNum(a) {
//     a = 20;
// }

// let num = 10;
// increaseNum(num);
// console.log(num);


// function changeArr(a) {
//     a[0] = "Hello";
// }

// let arr = [1, 2, 3];
// changeArr(arr);
// console.log(arr);




//1. It is not using any of the data (variable) from outside of it's inner scope.
//2. It should not have any side effects! (Leaking) -> My function should not edit ANY data outside of it's inner scope.
//3. If I run my function n number of times with same input. It should give me same output!


//This breaks rule 1
// var name = "Geekster";
// function printName() {
//     console.log(name);
// }
// printName();


//This breaks rule 2
// function changeArr(a) {
//     a[0] = "Hello";
// }

// let arr = [1, 2, 3];
// changeArr(arr);
// console.log(arr);

//This breaks rule 3
// function generateRandom() {
//     return Math.random();
// }

//This is a pure function.
// function sum(a, b) {
//     return a + b;
// }




// function changeArr(a) {
//     let b = [...a]; //Copying (Deep Copy) / Cloning
//     b[0] = "Hello";
//     return 
// }

// let arr = [1, 2, 3];
// changeArr(arr);
// console.log(arr);




///First order, higher order.

function fn(name, cb) {
    console.log(name);
    cb();
}

fn("Geeks", function() {
    console.log("This is from callback");
});


function fn2() {
    function f() {
        console.log("Inner function");
    }
    return f;
}

fn2()();


//This is a first order function.
function sum(a, b) {
    return a + b;
}



//Write a function to take the name as an input and show it as a callback.

// function takeName(cb) {
//     let name = prompt("Enter your name");
//     cb(name);
// }


// takeName(function(a) {
//     console.log("Hello " + a);
// });

// takeName(function(a) {
//     console.log('Hey ' + a);
// });

// setTimeout(() => {
//     console.log("Hi");
// }, 0);


// function abcd() {
//     console.log("Hi");
//     abcd();
// }

// abcd();


// function a() {
//     console.log('A called');
//     b();
// }

// function b() {
//     console.log("B called");
//     a();
// }


//Write a function to print natural numbers.

// function printNat(a) {
//     console.log(a);
//     printNat(++a);
// }

// printNat(0);


//Write a program to get sum of all number upto n
// n = 5 -> 1 + 2 + 3 + 4 + 5
// n = 7 -> 1 + 2 + 3 + 4 + 5 + 6 + 7

// function getSum(n) {
//     let sum = 0;
//     for (let i = 1; i <= n; i++) {
//         // sum = sum + i;
//         sum += i;
//     }
//     return sum;
// }

//Recursive functions are better from a code readability point of view.

// function getSum(n) {
//     if(n == 0) return 0;
//     return n + getSum(--n);
// }

// let s = getSum(5);
// console.log(s);


//Recursive function to get the nth fibonacci number.
//0, 1, 1, 2, 3, 5, 8, 13, 21
// function getFib(n) {
//     if(n == 0) {
//         return 0;
//     }
//     if(n == 1) {
//         return 1;
//     }
//     return getFib(n-1) + getFib(n-2);
// }

// let s = getFib(5);
// console.log(s);

//Further reading - Memoization.



// function a() {
//     var abcd = "Hello";
//     function b() {
//         console.log(abcd);
//     }
//     abcd = "World";
//     return b;
// }

// let s = a();
// s();


//Importance of closure with respect to security.
const counter = (function() {
    let value = 0;

    let increment = function() {
        value++;
    }

    let getCounter = function() {
        return value;
    }

    return {
        increment: increment,
        getCounter: getCounter,
    }
})();


counter.increment();
counter.increment();
counter.increment();
counter.increment();
console.log(counter.getCounter());