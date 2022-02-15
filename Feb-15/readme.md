1 - OOP concepts

- classes
- constructor is used to make the bluePrint of the object and add properties to that object

which object ?

- object created by each class

how will class create a object ?

- using the new keyword it will create and return an object

- inheritance

2 - axios

3 - mini project

assignment -

const matrixOne = [
[4,3,2,4],
[9,1,5,6],
[2,7,9,8],
[8,5,2,0]
];

// n\*n
// print the difference between the sum of left and right diagonal
// (4+1+9+0) - (4+5+7+8)

first try brute force (2 for loops)
try to solve this using 1 for loop

think of reactDOM.render as getting the arg2 and .appendChild arg1

why react ?
1 - it's composable !
2 - it's declarative !

declarative(what should be done) - tell me what to do and ill do it

imperative(how it should be done) - explain every step on how to do something

ex -
const h1 = document.createElement("h1")
h1.textContent = "This is an imperative way to program"
h1.className = "header"
document.getElementById("root").append(h1)

declarative -
ReactDOM.render(<h1 className="header">Hello, React!</h1>, document.getElementById("root"))

can save JSX as variables
