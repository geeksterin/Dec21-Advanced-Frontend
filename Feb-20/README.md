Feb-20

React DOC - https://reactjs.org/docs/getting-started.html

React Code snippet - https://marketplace.visualstudio.com/items?itemName=dsznajder.es7-react-js-snippets

1. setState - Recap
-> These are data which is observed by React for any changes.
-> My task is that I have a text block (h2) and an input field. Whatever I enter in the input should be automatically updated in the h2 text.

2. eventHandlers -> Anything that happens when an event occurs.
onChange, onSubmit, onClick, onMouseOver, onFocus, onDrag... etc,

() => {alert("ABCD");}
_  => {alert("ABCD");}
_  => alert("ABCD");

3. Refs -> Reference (Basically to access the elements using Virtual DOM).
-> I have a input type text and a button. Clicking on the button will update the text shown below.

4. Fragments -> Removal of unnecessary wrapper/container tags. (Commonly, divs). Improves performance, reduces the load on the client (User Agent).
<React.Fragment></React.Fragment> -> <></> 
(React v16.2 -> Nov,2017)

5. Different Casing Techniques (Naming conventions):
-> camelCase -> For function names (for variables)
-> PascalCase -> For class names
-> kebab-case
-> snake_case -> For variable names
-> UPPERFLATCASE
-> TRAIN-CASE

6. Navigation (using conditional rendering).
-> Kind of what Instagram does.
7. Inline Styling using the style object.


Assignment:
-> Complete the IG app that we started. (No API stuff here), just hardcode some images/videos/content.
-> It should look same.