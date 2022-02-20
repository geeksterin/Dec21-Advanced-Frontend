function createPlayer(name, score) {
  this.name = name;
  this.score = score;
}

createPlayer.prototype.logout = function () {
  console.log("logout");
};

const x = new createPlayer("virat", 99);
// console.log(x);

const createPlayer2 = (name, score) => {
  this.name = name;
  this.score = score;
};

// const y = new createPlayer2("dhoni", 99);
// console.log(createPlayer2.__proto__);

// from ES6 JS allows us to write classes instead of manually adding prototypes

class Player {
  // creates and empty object call "this"
  constructor(name, score) {
    this.name = name;
    this.score = score;
  }
  increase() {
    // class assumes this is a function (we didnt write "function" keyword)
    console.log("increasing");
    this.score++;
  }
  print() {
    console.log("my name is ", this.name, "and score is ", this.score);
  }
}

const player1 = new Player("dhoni", 100);

// console.log(Player);
// console.log("player 1 is - ", player1);
// console.log(player1.increase(), player1.print());
// this will first call increase() and score will go up and then call print

// inheritance

class PaidUser extends Player {
  constructor(name, score, accountBalance) {
    // this.name = name
    // this.score = score
    super(name, score); // calls the constructor method of the parent class
    // you have to ALWAYS call super inside constructor of child class
    this.accountBalance = accountBalance;
    // this.state = { count: 10 };
  }

  paiduserPrint() {
    console.log("i am paid user");
  }

  print() {
    // polymorphism - function of same name but different functionalities
    console.log("i am printing inside CHILD");
  }
}

const paiduser = new PaidUser("abhishek", 90, 0);

console.log(paiduser);
console.log(paiduser.print());
console.log(paiduser.paiduserPrint());

// encapsulation
// inheritance
// polymosphism

// Player > PaidUser > grandChild

class grandChild extends PaidUser {
  constructor(name, score) {
    super(name, score, 100);
    this.grandCHildName = "geekster";
  }
}

const q = new grandChild("geek", 999);
console.log(q);

// class App extends React.Component{
//     constructor(){
//         super()
//         this.state = {}
//     }
//     componentDidMount(){
//     }
// }

// class App {
//     constructor(){
//         super()
//         this.some = z
//     }
// }
// class SomeClass{
// }
// const z = new SomeClass()

// map

const mainArr = [1, 2, 3, 4, 5];
// [2,4,6,8,10]

function doub(arr) {
  const x = [];
  for (let i = 0; i < arr.length; i++) {
    x.push(arr[i] * 2);
  }
  return x;
}

// console.log(doub(mainArr));

// Array.map(callBackFn) - takes a function as a input
// call that function with elements of the array one by one
// and return the resultant array

const newArr = mainArr.map((item) => {
  // anonymous arrow function
  return item * 3;
});

// function mulBy2(num) {
//   return num * 2;
// }

console.log(newArr);

// Array.filter(callBackFn)  - callback fn of filter should return true of false

// const mainArr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// const filteredArr = mainArr2.filter((filterNum));

// function filterNum(num) {
//   if (num < 6 && num !== 3) {
//     return true;
//   } else {
//     return false;
//   }
// }

// const filteredArr = mainArr2.filter((num) => {
//   if (num > 5) {
//     return true;
//   } else {
//     return false;
//   }
// });

// const filteredArr = mainArr2.filter((num) => {
//   return num > 5;
// });

// console.log(filteredArr);

// const geek = 10;
// console.log(geek > 10);

const mainArr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// Array.reduce(callBackFn, initialValue)
/**
 reduce ka callBackFn - takes 2 args (prevValue, currentArrayElement)
 */

// const reduced = mainArr2.reduce(someFn, 1);
const reduced = mainArr2.reduce((prev, currentArrayElement) => {
  return prev * currentArrayElement;
}, 1);

// function someFn(prev, currentArrayElement) {
//   return prev * currentArrayElement;
// }

console.log("REDUCED - ", reduced);
