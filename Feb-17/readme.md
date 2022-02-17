- axios post request
- forms
- bootstrap

- POST request is you sending data to backend and telling it to do something with that data (eg - store this data in database)

- GET req is you asking for some data form the backend

- controlled components - are components whose value and onchange are controlled by us(our code) -
  eg-
  <input
      placeholder="Name"
      value={this.state.firstName}
      onChange={this.changeName}
  />

- uncontrolled components - are those whose value is not controlled by us directly

- assignment
  create a form using bootstrap classes
  form should have 3 properties
  name, email, phone number

  input type should be "text"

  add some validation to input fields ( name should not be greater than 20 characters)
  and email should have "@" inside it
  on submit of that form, call axios POST API - "https://reqres.in/api/users"

- how to update state of parent from inside a child component
