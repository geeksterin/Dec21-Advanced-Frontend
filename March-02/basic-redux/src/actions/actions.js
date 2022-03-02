const increaseActionFn = () => {
  return {
    type: "INCREASE",
  };
};

const decreaseAction = (amount) => {
  return { type: "DECREASE", amount: amount };
};

export { increaseActionFn, decreaseAction };
