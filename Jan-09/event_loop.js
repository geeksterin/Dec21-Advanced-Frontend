console.log('🌻');

//1. What is an event loop?
//- It will periodically check the Call stack and Task Queue
//- It pulls the task from callback queue and push it to the call stack.

//Task Queue <-> Callback Queue <-> MacroTask Queue.
// Microtask Queue
// Promises, Mutation Observers. (They observe the changes in DOM tree).
// Microtask Queue has higher priority than Macrotask Queue. (Callback Queue or Task Queue).


//Microtask Queue is called just before ending an iteration.
//Macrotask Queue is called just after starting an iteration.


// const a = (cb) => {
//     console.log("ABCD");
//     cb();
// }

// a(() => {
//     console.log("Hey");
// });

//Callback approach!
//Take 3 inputs (one after another) and all three has to be even for the player to win!
// const fn = (success_cb, failure_cb) => {
//     const num = prompt("Enter a number");
//     if(num % 2 == 0) {
//         //Success
//         success_cb();
//     } else {
//         //Failure
//         failure_cb();
//     }
// }

// fn(() => {
//     console.log("Success");
// }, () => {
//     console.log("Failure");
// });

// fn(() => {
//     alert("Success, Number is even");
//     fn(() => {
//         alert("Second attempt is also success");
//         fn(() => {
//             alert("Hattrick, all three are even, You've won");
//         }, () => {
//             alert("Ooops, bad luck");
//         })
//     }, () => {
//         alert("Ooops, failed");
//     })
// }, () => {
//     alert("Failure, Number is not even");
// })


//Code Readability - We are passing multiple callbacks in arguments.
//Callback Hell - Callbacks inside callbacks. (Nesting of callbacks)


//Promise approach

// const fn = new Promise((resolve_cb, reject_cb) => {
//     const num = prompt("Enter a number");
//     if(num % 2 == 0) {
//         //Success
//         resolve_cb();
//     } else {
//         //Failure
//         reject_cb();
//     }
// });

// console.log(fn);

// fn.then(() => {
//     console.log("Success");
// }).catch(() => {
//     console.log("Failure");
// });

// fn.then(() => {
//     console.log("Success for the first win");
//     return fn;
// }).then(() => {
//     console.log("Success for the second win")
//     return fn;
// }).then(() => {
//     console.log("Finally, you won the game");
// })
// .catch((e) => {
//     console.log("You failed the game");
// });


// const p1 = new Promise((fullfilled, rejected) => { fullfilled('First'); });

// p1.then((a) => {
//     console.log(a);
//     console.log("First promise fullfilled");
//     const p2 = new Promise((f, r) => { r('Second'); });
//     return p2;
// }).then((a) => {
//     console.log(a);
//     console.log("This success is fullfillment of P2");
// }).catch((e) => {
//     if(e == "Second") {
//         console.log("Error came by second promise");
//     }
//     console.log("ABCD");
// });
// Comparatively less difficult to read ☝🏻

//More difficult to read. 👇🏻
// const fn = (f, r) => { f('First'); };
// fn((a) => {
//     console.log(a);
//     console.log('First function success');
//     const fn2 = (f, r) => { f('Second'); };
//     fn2((a) => {
//         console.log(a);
//         console.log("second function call");
//     }, () => {} );
// }, () => {}) 




//Write a promise to check if the entereted name is the class instructor or not

// const fn = new Promise((fullfill, reject) => {
//     let nm = prompt("Enter your name");
//     if(nm == "Aayush") {
//         fullfill({
//             status: "Success",
//         });
//     } else {
//         reject({
//             status: "Failure",
//             trueInstructorName: "Aayush",
//         });
//     }
// });

// fn.then(a =>{
//     console.log("It is success");
//     console.log(a);
// }).catch(z => {
//     console.log("It is failure");
//     console.log(z);
// });




//Comparison of Microtask Queue, MacrotaskQueue and Call Stack.

// new Promise((s, f) => { s(); }).then(() => {
//     console.log("C.1");
// }); //Microtask Queue, second Priority.
// new Promise((s, f) => { s(); }).then(() => {
//     console.log("C.2");
// });
 //Callback Queue, third priority.



setTimeout(() =>{
    console.log("A.1");
    // new Promise((s, f) => { s(); }).then(() => {
    //     console.log("A.2");
    // }); 
}, 0);

setTimeout(() =>{
    console.log("A");
}, 0);

console.log("B"); //Call Stack, first priority

//1. SetTimeout inside settimeout
//2. Settimeout inside Promises.
//3. Promises insie promises.
//4. Promises and setimeout inside promises.
//5. Promise inside setimtout which is again inside another promise.
