const reducer = (state, action) => {
  if (state === undefined) {
    return {
      products: [],
      total: 0,
    };
  }

  const product = action.payload;
  const product_id = product.id;
  const product_price = product.price;

  switch (action.type) {
    case "ADD_TO_CART":
      const newProduct = {
        id: product_id,
        quantity: 1,
      };
      const result = state.products.filter((x) => x.id === product_id);
      if (result.length === 0) {
        state.products.push(newProduct);
        state.total = state.total + product_price;
      }
      //   if (!state.products.includes(product_id)) {
      //     state.products.push(product_id);
      //     state.total = state.total + product_price;
      //   }
      //TODO:
      break;
    case "REMOVE_FROM_CART":
      if (state.products.includes(product_id)) {
        const idx = state.products.indexOf(product_id);
        state.products.splice(idx, 1);
        state.total = state.total - product_price;
      }
      break;
    case "INCREASE_QUANTITY":
      //   console.log("helloooooo", product_id, product_price);

      const newArr = [];
      for (let i = 0; i < state.products.length; i++) {
        if (state.products[i].id === product_id) {
          const newObj = {
            id: product_id,
            quantity: state.products[i].quantity + 1,
          };
          newArr.push(newObj);
        }
        newArr.push(state.products[i]);
      }

      state.products = newArr;
      state.total = state.total + product_price;

      //TODO:
      break;
    case "DECREASE_QUANTITY":
      //TODO:
      break;
    case "CLEAR_CART":
      //TODO:
      break;
    default:
      break;
  }

  return { ...state };
};

export default reducer;

// obj = {}
