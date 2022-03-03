const reducer = (state, action) => {
  if (state === undefined) {
    return {
      name: "geekster",
    };
  }

  //   if (action.type === "CHANGE_NAME") {
  //     console.log("i have reached reducer");
  //   }

  switch (action.type) {
    case "CHANGE_NAME":
      console.log("i have reached reducer - switch statement");
      state.name = action.payload;
      break;

    default:
      break;
  }

  return { ...state };
};
export default reducer;
