- what is a reducer
- reducers are functions which take current state and an action and return a 'new state'
- why do they return a new state ?
- because redux will pass the reference of the state and if that reference is same then the state update will not be reflected in our components (no rerenders)
  it check the new return obj reference with prev reference and if they are same, then no rerenders happen

- context vs redux - context can be a bit complicated and is used for smaller applications, when app becomes huge, we should chose redux for simplicity and code readability
