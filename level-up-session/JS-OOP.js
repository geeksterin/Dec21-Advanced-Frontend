// console.log("hello");

/**
 *
 */

const geek = {
  // key: value
  name: "abhishek",
  age: 25,
};

// console.log(geek);

/**
 
name of player
score of player

objects can have properties 
and they can also have functionalities

*/

const player1 = {
  name: "geekster",
  score: 99,
  increase: function () {
    player1.score++;
  },
};

// player1.score++

const player2 = {
  name: "krishna",
  score: 100,
  increase: function () {
    player2.score++;
  },
};

// encapsulation - putting all related data inside one object

// console.log(player1);
// player1.increase();
// console.log(player1);

// how to check data type of any variable in JS -
//  console.log(typeof variableName);

// dot notation
const player3 = {};
player3.name = "ankur";
player3.score = "90";
player3.increase = function () {
  player3.score++;
};
// console.log(player3);

// Object.create()
const player4 = Object.create(null);
player4.name = "ankur";
player4.score = "90";
player4.increase = function () {
  player4.score++;
};
player4.login = function () {
  console.log("you are logged in !!");
};
// console.log("player 4 - ", player4.login());

// created storage for my utility functions
const functionStore = {
  increase: function () {
    // anonymous function
    this.score++;
  },
  decrese: function () {
    this.score--;
  },
  login: function () {
    console.log("you are logged in !!");
  },
};

// function createPlayer(name, score) {
//   //   const newObj = {};
//   const newObj = Object.create(functionStore);
//   newObj.name = name;
//   newObj.score = score;
//   return newObj;
// }

// const player5 = createPlayer("virat", 88);
// const player6 = createPlayer("dhoni", 111);

// console.log(player6.increase());
// console.log(player5.increase());

// console.log(player6);
// console.log(player5.score);

// player6.login();
// Object.create(anyObject)

const y = {
  virat: "kohli",
  runs: 100,
};

const x = Object.create(y); // will return an empty object BUT with a link to y object

// console.log("x is - ", x);

// const z = () => {};

// const q = [z];

// console.log(q);

// function geek2() {
//   console.log("geekster");
//   return "ster";
// }
// // geek2.geek = "abhishek";
// // // console.log(typeof geek2);
// // geek2();

// console.log(geek2.prototype);

function createPlayer(name, score) {
  // const newObj = Object.create(functionStore);
  // const this = {}
  this.name = name;
  this.score = score;
  //   return newObj;
}

// createPlayer.prototype.login = function () {
//   console.log("LOGIN");
// };
// createPlayer.prototype.logout = function () {
//   console.log("logout");
// };
createPlayer.prototype = functionStore;
createPlayer.prototype.team = "manchester united";

console.log(createPlayer.prototype);
console.log("type of - ", typeof createPlayer.prototype);
// new keyword in JS

const player7 = new createPlayer("ronaldo", 7);
const player8 = new createPlayer("messi", 7);

console.log(player7);
console.log(player8.team);
console.log(player8.login());
// console.log(player7.increase());

const arr = [1, 2, 3, 4, 5];

function doub(arr) {
  const x = [];
  for (let i = 0; i < arr.length; i++) {
    x.push(arr[i] * 2);
  }
  return x;
}

console.log(doub(arr));

// map takes a function, which will be
// applied to each element of the array and it returns the final array

const newArr = arr.map((num) => {
  return num * 3;
});

console.log(newArr);

// function mulBy3(num) {
//   return num * 3;
// }
