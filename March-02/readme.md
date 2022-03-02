- npm install react-redux
- npm install redux

- steps to integrate redux in my app:
  - create store
    steps to create store :
    1 it needs a reducer
    2 we call the createStore function (given to us by redux)
    what are arg to createStore fn ? - the arg is reducer

mapDispatchToProps can SEND "things" to reducer
what "things" ? - action
how does it send action ? - by using dispatch function
where does it get dispatch fn ? - redux gives it access to this fn
mapDispatchToProps = (dispatch, props)

assignment -
write same functionality for increase
