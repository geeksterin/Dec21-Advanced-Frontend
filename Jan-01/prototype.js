console.log('😎');

Array.prototype.hello = _ => {
    console.log('Hello Geeks');
}

const obj = {};
console.log(obj);

const arr = [];
arr.push(12345);
console.log(arr);


const arr2 = [];
arr2.hello();

arr.hello();


//Write a function to check whether a number less than 10 is present in the array or not.

Array.prototype.check10 = function() {
    for(let i = 0; i < this.length; i++) {
        if(this[i] < 10) {
            return true;
        }
    }
    return false;
}

const arr3 = [11, 30, 40];
let s = arr3.check10();
console.log(s);

const arr4 = [14, 15, 8, 11];
console.log(arr4.check10());


//Write a function to check whether a chracter is present in the string or not.

String.prototype.contains = function(ch) {
    for(let i = 0; i < this.length; i++)
        if(this[i] == ch)
            return true;
    return false;
}

const str = "Hello";
let k = str.contains('z');
console.log(k);

const str1 = "Hey";
str1.contains('z');