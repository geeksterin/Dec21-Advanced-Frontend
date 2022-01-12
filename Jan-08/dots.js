// console.log("ABCD");
//If you have an object or an array / iterable. Then you can spread it. You can iterate on it and and have each element separately.
//Syntax is same (...)
//If we are using it in a function parameter, we call it rest operator.
//If we are using it on an iterable, then we call it spread operator.

// const arr = [1, 2, 3, 4];
// const arr2 = [5, 6, 7, 8];

// const pre_arr = [...arr, 5];
// console.log(pre_arr);

// arr.push(5);
// console.log(arr);

// const arr3 = [1, 2, 3];
// const fn = (a, b, c, ...d) => {
//     console.log(a);
//     console.log(b);
//     console.log(c);
//     // console.log(this);
// }

// fn(...arr3, "abcd");
// console.log(...arr3);
// console.log(arr3[0], arr3[1], arr3[2]);
// console.log(arr3)

// "a" + "a"; //Concat
// 10 + 10; //Mathematical sum

// const obj = {
//     'key1': "v",
//     'kkkk': "ABCD",
// };

// const obj2 = obj;
//Shallow Copy -> Both obj2 and obj will point to the same memory location.

// console.log(obj);
// console.log(obj2);

// obj2.key1 = "Value";
// //Shallow Copy -> Copies the Memory Location.

// console.log(obj);
// console.log(obj2);


// const a = 10;
// let b = a;
// b += 10;

// console.log(a);
// console.log(b);



// const obj = {
//     'key1': "v",
//     'kkkk': "ABCD",
// };
    
// // const obj2 = JSON.parse(JSON.stringify(obj));
// const obj2 = { ...obj };
// //Deep Copy -> Both objects will have their own memory.

// console.log(obj);
// console.log(obj2);
    
// obj.key1 = "Value";
// //Deep Copy -> Copies the Memory Location.

// console.log(obj);
// console.log(obj2);



const arr = [1, 2, 3, 4];

const fn = (a, ...b) => {
    console.log(a);
    console.log(b);
}

fn(...arr);