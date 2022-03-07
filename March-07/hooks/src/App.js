import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import DisplayCount from "./DisplayCount";

function App() {
  // const resultArr = useState(22);
  // const count = resultArr[0]; // state
  // const changeCount = resultArr[1]; // function to change state
  // useState returns data and a function to change that data

  const [count, setCount] = useState(22); // setCount
  const [name, setName] = useState("geek"); // setName
  const [displayCount, setDisplayCount] = useState(true);

  // useEffect()
  // useEffect fn has 2 arguments
  // 1st - is a function(aka callBack)
  // 2nd - is an array of dependencies - basically an array
  // 2nd arg is optional*
  const print = () => {
    console.log("hello");
  };
  // useEffect(print, [name, count]); = componentDidUpdate
  // callback fn is executed each time any of the elements of dep arr are changed

  // useEffect(print, []); //  = componentDidMount
  // empty dep arr = componentDidMount

  // useEffect(() => {
  //   console.log("hello");
  //   return () => {
  //     // this fn is executed when component is unmounting = componentWillUnmount
  //     console.log("bye");
  //   };
  // }, []);
  useEffect(() => {
    console.log("hello from APP");
    // printName();
    return () => {
      // this fn is executed when component is unmounting = componentWillUnmount
      console.log("bye from APP");
    };
  }, [count]);

  // const printName = () => {
  //   console.log("first");
  //   someOtherFn();
  // };

  useEffect(() => {
    // call some other API
  }, [name]);

  const increase = () => {
    setCount(count + 1);
    setName("ster");
  };

  const decrease = () => {
    setCount(count - 1);
  };

  const toggleCount = () => {
    setDisplayCount(!displayCount);
  };

  return (
    <div className="App">
      <header className="App-header">
        {/* {makeList()} */}
        {/* <button onClick={() => decrease()}>dec</button>
        geekster - {count}
        <h3>name is {name}</h3>
        <button onClick={() => increase()}>inc</button> */}
        {displayCount ? (
          <DisplayCount
            increase={increase}
            decrease={decrease}
            name={name}
            count={count}
          />
        ) : (
          <div>comp is unmounted</div>
        )}

        <button onClick={() => toggleCount()}>display counter</button>
      </header>
    </div>
  );
}

export default App;
