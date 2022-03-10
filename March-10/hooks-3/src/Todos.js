import React, { useContext } from "react";
import AppContext from "./AppContext";

const Todos = (props) => {
  //  const todos = props.todos
  //  const addTodo = props.addTodo
  const { todos, addTodo } = props;
  const val = useContext(AppContext);
  console.log("val = ", val);
  return (
    <div>
      {todos.map((item, index) => {
        return (
          <div key={index}>
            <p>{item}</p>
          </div>
        );
      })}
      <button onClick={addTodo}>add todo</button>
    </div>
  );
};

export default Todos;
