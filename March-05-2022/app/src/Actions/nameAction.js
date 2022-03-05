import myStore from "../ReduxStore/MyStore";
const nameAction = (data, dispatch) => {
  //   myStore.dispatch({
  //     type: "NAME",
  //     payload: data,
  //   });
  dispatch({
    type: "NAME",
    payload: data,
  });
};
export default nameAction;
