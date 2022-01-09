console.log("ABCD");

//Write a function to check whether the number is odd or even. USING PROMISES.

let fun = (fulfill, reject) => {
    const num = 5;
    if(num % 2 == 0)
        fulfill('It is even');
    else
        reject('It is odd');
}

//Line 5 to 12 is a typical function which takes 2 callbacks and does something.

fun((a) => {
    console.log(a);
    console.log("This is success");
}, (b) => {
    console.log(b);
    console.log('It is rejected');
});
//Line 15 to 21 is calling fun and passing 2 arrow functions as the argument. 

//We are wrapping our function inside a promise.
fun = new Promise(fun);

//Line 28 to 34 is giving the callbacks inside .then and .catch instead of separate arguments.
fun.then((a) => {
    console.log(a);
    console.log("This is success");
}).catch((anything) => {
    console.log(anything);
    console.log('It is rejected');
});