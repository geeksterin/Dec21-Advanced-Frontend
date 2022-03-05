const nameReducer = (
  state = {
    name: "",
    eamil: "",
  },
  action
) => {
  switch (action.type) {
    case "NAME":
      state = {
        ...state, //name: "",
        // eamil: "",
        name: action.payload,
      };
      break;
  }
  return state;
};

export default nameReducer;
