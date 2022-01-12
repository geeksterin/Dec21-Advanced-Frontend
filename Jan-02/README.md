Jan-02

1. Pass by Value and Pass by Reference.
- Pass by Value (Call by Value) and Pass by Reference (Call by Reference).
- Pass by value will fetch the value from the memory and send the exact value.
- Pass by reference (is lazy), it will directly send the memory location only. 
- Because of this, if we change inside the function, the main memory content will be changed!


2. Pure Functions and Impure functions.
- It is not using any of the data (variable) from outside of it's inner scope.
- It should not have any side effects! (Leaking) -> My function should not edit ANY data outside of it's inner scope.
- If I run my function n number of times with same input. It should give me same output!

- The reason of having more pure functions is for better coding, more robustness, better compatability with other pure functions. (Because combining say 10,000 differen pure functions will not break anything in the code as each function will change only stuff inside it's inner scope.)

2. First order function and higher order function.
- Higher order functions can take and/or return another function as it's argument/output.
- First order (First class) functions do not deal with functions as argument or return. This type of function will not take another function as an argument add will also not return a function as output.


3. Callback -> Passing a function as an argument to a higher order function and then invoking it from inside of the higher order function.

4. Recursion -> A function that calls itself (directly or indirectly) is called a recursive function.
- A direct recursive function will call itself from within directly.
- An indirect function will call another function which will call the initial function.

-> Any algorithm that is done by loop (iteration) can be done using recursion and vice-versa.

5. Lexical Scope -> The scope where all the required data is available.

6. Closure -> Simply put, we can say it is function inside another function where if we return the inner function. It will prevent it's lexical scope from being garbage collected. It also makes the code more secure!


Assignment (UI based!):
1. Find factorial of a number using Recursion. (Create an input field, add a button and on clicking show the computed result in a paragraph or something).
2. Create a lock screen with a 4 digit pin code. (10 separate buttons). Similar to your phone. (You can decide your own pin). Once unlocked, you can simply change text or something. (Reference, attached image).
3. Create a FizzBuzz App.
- If any number is divisible by 3, you should say Fizz
- If any number is divisible by 5, you should say Buzz
- If any number is divisible by both 3 and 5. You should say FizzBuzz
1, 2, Fizz, 4, Buzz, Fizz, 7, 8, Fizz, Buzz, 11, Fizz, 13, 14, FizzBuzz, 16, 17, Fizz, 19, Buzz, Fizz, 22, 23, Fizz, Buzz...
- The UI will be like you have an input type number and then button. Generate the first n numbers in the FizzBuzz series and display it in a list!


Further Reading - https://codepen.io/mendieta/pen/WgvENJ