const reducer = (state, action) => {
  if (state === undefined) {
    return {
      count: 0,
      name: "geek",
    };
  }

  switch (action.type) {
    case "INCREASE":
      state.count = state.count + 1;
      console.log("reached reducer");
      break;
    default:
      break;
  }

  return { ...state };
};

export default reducer;
