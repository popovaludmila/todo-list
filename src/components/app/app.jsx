import { useEffect, useState } from "react";
import { Header } from "../header/header";
import styles from "./app.module.css";
import { TodoItem } from "../todo-item/todo-item";
import { v4 as uuidv4 } from "uuid";
import { Sort } from "../sort/sort";

export const App = () => {
    Notification.requestPermission();

    if ('serviceWorker' in navigator) {
        navigator.serviceWorker
          .register('/sw.js')
          .catch((error)=> {
            console.error('Ошибка регистрации Service Worker:', error);
          })
      }

  const [todos, setTodos] = useState(
    JSON.parse(localStorage.getItem("todos")) || []
  );

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));

    navigator.serviceWorker
      .ready
      .then((r) => r.active.postMessage(todos));

  }, [todos]);

  const addTodo = (todo) => {
    setTodos((todos) => [...todos, todo]);
  };

  const changeStatus = (id) => {
    setTodos((todos) => {
      return todos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, done: !todo.done };
        }

        return todo;
      });
    });
  };

  const deleteItem = (id) => {
    setTodos((todos) => {
      return todos.filter((todo) => todo.id !== id);
    });
  };

  const updateTask = (id, name, decription, deadlineTime) => {
    setTodos((todos) => {
      return todos.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            name: name,
            decription: decription,
            deadlineTime: deadlineTime,
          };
        }

        return todo;
      });
    });
  };

  const [sortField, setSortField] = useState("timestampCreateTime");

  return (
    <div className="container">
      <div className={styles.inner}>
        <h1 className={styles.title}>Планировщик задач</h1>
        <button id='subscriptionButton' disabled={true}></button>
        <Header addTodo={addTodo} />
        <Sort
          sortDeadlineTimes={() => setSortField("timestampDeadlineTime")}
          sortCreateTimes={() => setSortField("timestampCreateTime")}
        />
        <div className={styles.todos_wrapper}>
          <ul className={styles.list}>
            {todos
              .sort((a, b) => a[sortField] - b[sortField])
              .map((todo) => {
                return (
                  <TodoItem
                    item={todo}
                    key={uuidv4()}
                    changeStatus={changeStatus}
                    deleteTask={deleteItem}
                    updateTask={updateTask}
                  />
                );
              })}
          </ul>
        </div>
      </div>
    </div>
  );
};
