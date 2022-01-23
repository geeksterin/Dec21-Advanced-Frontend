// var a = 10;
// console.log(a);

// var a = 20;
// console.log(a);

// function fn() {
//     var a = 30;
//     console.log(a);
// }
// fn();


// function fn2() {
//     console.log(a);
// }
// fn2();


// function fn() {
//     var a = 10;
// }

// fn();
// console.log(a);
// console.log("ABCD");

// (function () {
//     function fn() {
//         a = 30;
//     }
//     fn();
// })();

// console.log(a);
// console.log("ABCD");


// function fn() {
//     a = 10;
// }
// fn();
// console.log(a);


// console.log(a);
// a = 20;

//Leaking of variable.
// var a = 200;
// function fn() {
//     var a = b = 3;

//     console.log(a);
//     console.log(b);
// }
// fn();
// console.log(b);
// console.log(a);





function fn(){
    var x = 23; 
    function inner(){
        x++;
        console.log(x); 
        var x=43;
    } 
    inner();
} fn();




// fn();

// function fn() {
//     console.log("ABCD");
// }