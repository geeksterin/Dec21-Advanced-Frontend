use following command to create a react project -

npx create-react-app <give-any-name> --scripts-version react-scripts@2.1.7

this will create a folder with the name you provided, go inside that folder and open it in VS code

Babel compiles JSX down to React.createElement() calls -
'''
const element = (

  <h1 className="greeting">
    Hello, world!
  </h1>
);
const element = React.createElement(
  'h1',
  {className: 'greeting'},
  'Hello, world!'
);
'''

- inheritance
- polymosphism
- basic react

- props - properties/data passed to a react component - only from parent to child
