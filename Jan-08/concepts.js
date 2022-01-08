console.log('😎');

//Temporal Dead Zone (TDZ) - let and const variables/constants cannot be edited until and unless they have be completely initialized. (Definition should be done). (Temporal because of it is upto some line number, upto some execution. It is temporal). Dead because upto that part, the variable is dead. i.e. Cannot read/write/access.

// console.log(a);
// var a = 10;
// console.log(a);

// a = 20;
b = 30;
// console.log(a);

let a = 10;
console.log(a);

console.log("kjdhskjdfjgkh");


const fn = () => {
    console.log("A");
    setTimeout(() => {
        console.log("1");
    }, 1000);
    setTimeout(() => {
        console.log("2");
    }, 1000);
    setTimeout(() => {
        console.log("3");
    }, 1000);
    setTimeout(() => {
        console.log("4");
    }, 1000);
    console.log("C");
}
fn();