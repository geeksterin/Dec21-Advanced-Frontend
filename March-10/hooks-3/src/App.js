import {
  useState,
  useMemo,
  useRef,
  useEffect,
  useContext,
  useCallback,
} from "react";
import logo from "./logo.svg";
import "./App.css";
import Todos from "./Todos";
import AppContext from "./AppContext";

function App() {
  const [count, setCount] = useState(4);
  const [todos, setTodos] = useState([]);
  // const resultOfExFn = useMemo(() => expensiveFn(count), [count]);
  const resultOfExFn = useMemo(() => expensiveFn(count), []);
  // const geekRef = useRef(0);
  // // const resultOfExFn = expensiveFn(count);
  // const contextValue = useContext(AppContext);
  // console.log("context-value - ", contextValue);
  //arg to useContext is the context from where you want to read the value from

  const printCount = useCallback(() => {
    console.log("printCount - ", count);
    setCount(count + 1);
  }, []);

  useEffect(() => {
    // console.log(geekRef.current);
    printCount();
    // fetch(count)
  }, [printCount, count]);

  // const increase = useCallback(() => {}, [])

  const increase = () => {
    setCount(count + 1);
  };

  const addTodo = () => {
    setTodos((prevTodos) => [...prevTodos, "some new task"]);
    // setTodos(todos.push("some new task"));
  };

  return (
    <div className="App">
      <header className="App-header">
        geekster - {resultOfExFn}
        <input />
        <div className="todo">
          <Todos todos={todos} addTodo={addTodo} />
        </div>
        <hr />
        <p>count - {count}</p>
        <button onClick={increase}>increase</button>
      </header>
    </div>
  );
}

const expensiveFn = (num) => {
  for (let i = 0; i < 1000000000; i++) {
    num = num + 1;
  }
  // console.log("expensive!!!");
  return num;
};

export default App;
