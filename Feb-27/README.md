Feb-27

npx create-react-app <project-name>
npm install redux
npm install react-redux

Redux -> It is a state management tool.
-> Here state does not mean component state. Instead it means data. Data of the WHOLE application.

1. Action -> What to Do. It is an object. (it contains a key called as type) 
2. Reducer -> How to do. It is a function. (It takes 2 parameters, current state and action). Based on the type of the action, it will do something and RETURN the new state.
3. Store -> It is an object which contains the state information. We cannot directly get or set that information. We have to use the redux way.
-> To get, we use getState().
-> to set, we use dispatch().
4. Component / View. -> The place where this data is SHOWN. (The frontend).


1. Recap of Redux and all 4 pillars of Redux
-> Create an Ecommerce App using React and Redux.
-> https://fakestoreapi.com/
--> Show all products.
--> Have an add to Cart button.
--> Cart page. This page will have all the items and their quantity and the total price of checkout.

--> If we get time, then product detail 

2. Prop Drilling -> It means the process of sending props from a parent to a descendant. (Higher level component to lower level component).


Assignment 1:
-> Show the cart total in the header component.



3. dependencies vs dev dependencies vs peer dependencies.
6. forwardRef
7. Controlled vs Uncontrolled. (Data binding)
8. Higher Order Components.  First Order Components
9. Pure Components / Impure Components.


13. Redux with React (react-redux).
-> E-Commerce Checkout page. (NPM)


-> root reducer

14. Strict Mode
15. Routers
16. Error Boundaries







2. NodeJS (>14), install CRA, npx CRA.
3. NPM vs NPX.
5. package.json
6. devDependencies vs dependencies.
7. Hosting of React. (Netlify and Heroku)
9. Functional and Classes. 
14. Fetch is done. Axios is not done.
16. Router is not done.


