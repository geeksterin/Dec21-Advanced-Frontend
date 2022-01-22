Jan-22

1. Clear up async (async keyword)
-> Async functions are just syntactical sugar of Promises.
-> It's just a different way of writing.
-> Under the hood, it's the same concept.

1. Encapsulation - Bundling / wrapping the data (properties and methods) inside an object.
2. Abstraction - Hiding unnecessary data and methods from the user.
-> # to make it private.

3. getters/setters -> Any object's data member (Object property) can be accessed directly by using .<property_name>.

Q. What if there is a situation where we want to access but not want to allow update.

Q. Suppose I have a counter. Which can only increment. I don't want anyone to be able to decrement the counter.

data member -> the values;
member functions -> The functionality.

4. Inheritance
Inherit properties and methods of parent class in the child class.
In order to do inheritance. We use the keyword extends.

class <ChildClass> extends <ParentClass> - ES6
ES5 -
<ChildClass>.prototype = Object.create(<ParentClass>.prototype);
<ParentClass>.call(this, <The arguments to the constructor>);


-> Polymorphism -> Many forms.
-> Same name, many forms.
-> If Parent and child classes have a function with same name.
-> Then if called from the parent object, it will call the parent function.
-> If called from the child object, it will call the child function.

-> If child does not have that function, then it will fall back to parent. Because of inheritance.


//Class for Rectangle (Base class / Parent class)
//Class for Square, all squares are rectangle. (Child class)


1. Single Inheritance.
2. Multi level Inheritance. (Child, Parent, Grant parent, Great Grand Parent)

2. OOPS in depth.
-> 4 Pillars of OOPs and see implementation of them.


3. Cookies -> 🍪
Store the data on the browser which can be later updated also.
-> Keep me signed in. / Remember me ✔
-> For tracking / showng ads.
-> It's not mandatory to ask.

You save Cookie via a Web API.
-> document.cookie;

A cookie will look like 
key=value; key=value; key=value;

Create
Read
Update
Delete - Sunday


[key, value] = element.split("=");

Assignment 1:
To create a Google clone. 
1st -> landing page, 
2nd -> Search result page

-> Use the Google search API to search and show results.
-> Use cookies to save previously searched items and show suggestion.

-> If I open your page for the first time and search mobiles. You save mobiles in the cookie. so, next time as I type mo, it should auto suggest mobiles.









Further reading - https://en.wikipedia.org/wiki/Duck_typing
