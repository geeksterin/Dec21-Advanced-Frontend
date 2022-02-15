// console.log("hello");

class Person {
  // this = {
  //       key : value
  //   }
  constructor(age, name) {
    console.log("person");
    this.age222 = age;
    this.name = name;
    // this = {
    //     yolo : "geekster"
    //      geek : 25
    // }

    // this = {
    //     yolo : "geekster"
    //      geek : 44
    // }
  }
  someFunction() {
    console.log("this is parent");
  }
}
// class Component {
//     constructor(){
//     }
// }
class Coder extends Person {
  // this = {}
  constructor(age, name, skill) {
    console.log("coder");
    super(age, name);
    // this.
    this.skill = skill;
  }
  //   someFunction() {
  //     console.log("this is coder");
  //   }

  //   componentDidMount(){

  //   }

  //   render () {

  //   }
  // return this
}

// Person {
//     prototype : {
//         someFunction
//     }
// }

// const x = new Person(25, "abhishek");
const y = new Coder(33, "dhoni", "keeper");

console.log(y);
console.log(y.someFunction());

// Array.prototype.geek = { geek: "this is abhishek" };

// const arr = [];

// const z = [1, 2, 3];
// console.log(arr);
// console.log(z.abhishek);

// const a = 25;
// const obj = {
//   age: a,
//   h: function x() {},
// };
// obj.y = "hello";
