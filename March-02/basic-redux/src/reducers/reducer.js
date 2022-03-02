const reducer = (state, action) => {
  if (state === undefined) {
    return {
      reduxCount: 0,
    };
  }

  // if(action.type === "INCREASE"){
  // } else if(action.type === "DECREASE"){
  // }

  switch (action.type) {
    case "INCREASE": // if(action.type === "INCREASE")
      state.reduxCount = state.reduxCount + 1;
      break;
    case "DECREASE":
      console.log("i have reached decrease reducer");
      state.reduxCount = state.reduxCount - action.amount;
      break;
    default:
      break;
  }

  return { ...state };
};

export default reducer;

// const obj = {
//     name: "abhishek"
// }
// console.log(obj);
// const x = obj
// const y = {...obj} // = Object.create(obj)
