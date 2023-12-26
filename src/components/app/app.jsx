import { useState } from "react";
import { Header } from "../header/header";
import styles from "./app.module.css";
import { TodoItem } from "../todo-item/todo-item";

export const App = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos((todos) => [...todos, todo]);
    console.log(todo);
  };

  return (
    <div className="container">
      <div className={styles.inner}>
        <h1 className={styles.title}>Планирощик задач</h1>

        <Header addTodo={addTodo} />
        <div className={styles.todos_wrapper}>
          <ul className={styles.list}>
           <TodoItem />
           <TodoItem />
           <TodoItem />
           <TodoItem />
           <TodoItem />
           <TodoItem />
           <TodoItem />
           <TodoItem />
           <TodoItem />
           <TodoItem />
           <TodoItem />
           <TodoItem />
          </ul>
        </div>
      </div>
    </div>
  );
};
