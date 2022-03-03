const someActionFn = (someName) => {
  return {
    type: "CHANGE_NAME",
    payload: someName,
  };
};

export { someActionFn };

// someActionFn("abhishek")
