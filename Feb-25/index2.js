console.log("first");

const x = [1, 2, 3, 4, 5];

// Array.filter(callBackFn)
// callBackFn should return true or false

const result = x.filter(filterElement);

function filterElement(num) {
  if (num > 5) {
    return true;
  } else {
    return false;
  }
}
console.log(result);

// function filter(callBack){
//     // this = []
//     arr.loop(x =>
//         if(callBack(x)){
//             this.push(x)
//         }
//         )
// return this
// }
