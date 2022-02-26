Feb-26

1. NPM / NPX and CRA (Folder Structure).

- React is developed by Facebook.

Q. What is Node?
-> It is a runtime environment.
-> Allows running of JS code outside the Browser.
-> Uses the V8 Engine.

Q. Alternative to Node?
-> NODE (alternative) DENO

Q. What is NPM?
-> Node Package Manager
-> Helps us easily install, helps with import / export.
-> Is present by default with Node.

Q. Alternative to NPM?
-> yarn (This is also a package manager).
-> If you want to use yarn, you have to manually install it first.
-> Yarn is also developed by Facebook.

To check node version
node -v
To check npm version
npm -v

-v (It is one of the flags, for checking version).

Q. What is CRA (Create-react-app)?
-> It creates the environment for developing a React Application.
-> It makes development easy.

To install, we run
npm install create-react-app

To list all the installed packages
npm list

npx -> Node Package Execute (Exectioner).
-> The purpose of NPX is to execute the installed package.

npm start

npm run <custom-script>


2. package.json
-> Contains information about the node application.

3. StateLifting
-> Lifting of Data from the Child Component to the parent component. (Passing of data).

4. Stateless vs Statefull.
-> Components which use the React State are Stateful and which doesn't use State are stateless.

10. Redux
-> It is a state management tool.
--> State <-> Data
--> Data of whole application.
-> It has 1 store which contains ALL the data of your application.
-> The most commonly used way.

Alternatives:
-> Context API
-> Apollo GraphQL
-> MobX
-> Pull State

11. Redux using vanilla JS.
-> Like / Dislike Counter.

-> Redux CDN
https://cdnjs.cloudflare.com/ajax/libs/redux/5.0.0-alpha.0/redux.js


12. Action / Reducer / Store and View (4 pillars of Redux)








3. dependencies vs dev dependencies vs peer dependencies.
6. forwardRef
7. Controlled vs Uncontrolled. (Data binding)
8. Higher Order Components.  First Order Components
9. Pure Components / Impure Components.


13. Redux with React (react-redux).
-> E-Commerce Checkout page. (NPM)


14. Strict Mode
15. Routers
16. Error Boundaries

Assignment 1:
-> Create a color picker and when I pick any color, change the background and give same color.
You need to use 2 component, App and Picker.js. Use State Lifting
(Reference - https://www.webfx.com/web-design/hex-to-rgb/)

Assignment 2:
Make a Notes app using Redux and JS (Vanilla).





2. NodeJS (>14), install CRA, npx CRA.
3. NPM vs NPX.
5. package.json
6. devDependencies vs dependencies.
7. Hosting of React. (Netlify and Heroku)
9. Functional and Classes. 
14. Fetch is done. Axios is not done.
16. Router is not done.

