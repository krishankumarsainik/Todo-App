import React, { useState } from "react";
import TodoList from "./component/TodoList.js";
import TodoForm from "./component/TodoForm.js";
import "./App.css";
const App = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = (text) => {
    const newTodo = [...todos, { text, isCompleted: false }];
    setTodos(newTodo);
  };

  const completedTodo = (index) => {
    const newTodos = [...todos];
    newTodos[index].isCompleted = !newTodos[index].isCompleted;
    setTodos(newTodos);
  };
  const removeTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <div className="app">
      <h1>TODO APP</h1>
      <div className="todo-list">
        <TodoForm addTodo={addTodo} />
        <TodoList
          todos={todos}
          completeTodo={completedTodo}
          removeTodo={removeTodo}
        />
      </div>
    </div>
  );
};

export default App;
