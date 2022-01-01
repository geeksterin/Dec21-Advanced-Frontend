Jan-01.

N:
- If we have only 1 statement of execution, we don't need to have the curly brackets.
- Latest version of ES is ES12. (Till date)
- dev.to, pullrequest.com, betterprogramming.pub
- Regular Functions will bind to the context of execution whereas arrow functions will not bind.

1. Context of Execution.

- If in an object we are calling a regular function. It will bind to the context of execution, therefore it will point to the object. Whereas the arrow function will not bind to the context of execution and it will not point to the object. Instead it will point to window.
- If in the same object, we have async code (setTimeout), in that case, the async setTimeout function is executed in the window context because of which the regular function points to the winodow object. (This is not good), and the arrow function because it does not bind to the context of execution, it will not bind to window. Instead, it will bind to the scope of the caller. It will point to the object.

-> Regular functions have the this keyword point to the context of execution. 
-> arrow functions have the this keyword point to the scope where they are written.

1. Different Types of functions:
- Normal functions
- Anonymous functions.
- Arrow functions.
-> A regular arrow function.
-> Arrow functions with only 1 parameter.
-> One Liner Arrow functions. (It will return that statement).
-> Arrow functions with 0 parameters. (Both ways, with an empty round bracket as well as with _).

-> All arrow functions are anonymous functions by their nature.

Pros:
- Improves code readability.
- Beacause of their anonymous nature, they are more secure.
- There is no need of a context.

Cons:
- It doesn't bind with the this keyword as we expect.
- Not supported in all browsers (Internet Explorer). We will have to do something called a polyfill to make it work on IE.

 (this keyword)

- Function Instantiation. -> Creating a function using the new keyword.
- IIFE (Pronounced as effy ) -> Immediately Invoked Function Expression.
-> Immediately Invoked -> Invoke the function immediately on the same line.
-> Function Expression. -> A typical function.
-> IFFE are good with anonymous functions only (Because of security points).

- Arguments and Parameters.
- Rest operator.
- Prototype.

- Spread Operator.
- Recursion
2. Ternary comparison opertor.


Q. What is a function?
-> Collection of statements to perform a task.
-> It is reusable set of commands/set of instructions.
-> Needs to be called (invoked).
-> Takes an input gives an output.
-> Inputs are given as arguments.
-> Outputs are given as return.

Q. What is the difference between arguments and parameters?
-> Parameters are written in function definitions.
-> Arguments are sent in function invocation.


Assignments:
1. Use Rest operator and create your own minimum function. As in, it will take n number of arguments and return (NOT CONSOLE LOG) the minimum number out of that. DO NOT USE Math.xxxxx functions. (This includes a DSA question, finding minimum from an array).

minofAll(1, 2, 3, 4, 5, 6);
minofAll(-1, -5, 10);
minofAll(10, 20);


2. Create an array prototype to chek whether a prime number is present in that array or not. (return and not console directly).

[1, 3, 5] => true
[2, 4, 10, 15] => false




If we get time:
-> Closure.
-> Generator Functions.