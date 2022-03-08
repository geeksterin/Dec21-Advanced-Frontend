import { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";

function App() {
  // const callback = (reduxStore) => {
  //   return reduxStore.count;
  // };

  // const appCount = useSelector(callback);
  // it gives you access to redux store
  // whatever you return from the callback fn is store in your variable on left
  // side of useSelector

  const appCount = useSelector((reduxStore) => {
    return reduxStore.count;
  });

  const name = useSelector((x) => {
    return x.name;
  });

  console.log("name = ", name);

  const dispatch = useDispatch();
  // useDispatch returns a function
  // which fn? - dispatch fn

  // const useSelectore = (callBacnFn) => {
  //   callbackFN(reducStore)
  // };

  console.log("appCount = ", appCount);

  const dispatchAction = () => {
    dispatch({ type: "INCREASE" });
  };

  return (
    <div className="App">
      <header className="App-header">
        redux with hooks
        <p>appCount - {appCount}</p>
        <button onClick={() => dispatchAction()}>dispatch</button>
      </header>
    </div>
  );
}

export default App;
