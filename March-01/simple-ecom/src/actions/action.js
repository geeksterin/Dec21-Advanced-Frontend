const addToCart = (payload) => {
  return {
    type: "ADD_TO_CART",
    payload,
  };
};

const removeFromCart = (payload) => {
  return {
    type: "REMOVE_FROM_CART",
    payload,
  };
};

const increase = (payload) => {
  return {
    type: "INCREASE_QUANTITY",
    payload,
  };
};

const INCREASE_QUANTITY = {
  type: "INCREASE_QUANTITY",
};
const DECREASE_QUANTITY = {
  type: "DECREASE_QUANTITY",
};

const CLEAR_CART = {
  type: "CLEAR_CART",
};

export {
  addToCart,
  removeFromCart,
  INCREASE_QUANTITY,
  DECREASE_QUANTITY,
  CLEAR_CART,
  increase,
};
