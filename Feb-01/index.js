console.log("hello");

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  printInfo() {
    console.log("i am ", this.name, " my age is ", this.age);
  }
}

const x = new Person("geek", 25);

// x.printInfo();

// console.log(x);

class Programmer extends Person {
  constructor(name, age, YOE) {
    super(name, age);
    this.YOE = YOE;
  }

  printInfo() {
    console.log(
      "i am ",
      this.name,
      " my age is ",
      this.age,
      "i have ex of",
      this.YOE
    );
  }
}

const p = new Programmer("geekster", 33, 9);

p.printInfo();
