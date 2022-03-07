import { useEffect } from "react";
function DisplayCount(props) {
  useEffect(() => {
    console.log("hello from child");
    return () => {
      // this fn is executed when component is unmounting = componentWillUnmount
      console.log("bye from child");
    };
    // what can you do inside this return/compWillUnmount?
    // - close running connections of API calls
  }, []);
  return (
    <div>
      <button onClick={() => props.decrease()}>dec</button>
      geekster - {props.count}
      <h3>name is {props.name}</h3>
      <button onClick={() => props.increase()}>inc</button>
    </div>
  );
}

export default DisplayCount;
