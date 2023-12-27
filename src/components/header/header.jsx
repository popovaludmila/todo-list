import { useState } from "react";
import styles from "./header.module.css";
import { v4 as uuidv4 } from "uuid";

export const Header = ({ addTodo }) => {
  const [form, setValue] = useState({
    name: "",
    time: "",
    date: "",
    description: "",
  });

  const onChange = (e) => {
    setValue({ ...form, [e.target.name]: e.target.value });
  };

  const resetValue = () => {
    setValue({
      name: "",
      time: "",
      date: "",
      description: "",
    });
  };

  const saveItem = () => {
    if (form.name !== "" && form.date !== "" && form.time !== "") {
      const arrDate = `${form.date.split("-").reverse().join(".")}`;
      const currentDate = new Date();
      const deadlineTime = Date.parse(`${form.date} ${form.time}`);

      const item = {
        id: uuidv4(),
        createTime: currentDate.toLocaleString([], {
          year: "numeric",
          month: "2-digit",
          day: "2-digit",
          hour: "2-digit",
          minute: "2-digit",
        }),
        name: form.name,
        deadlineTime: `${arrDate}, ${form.time}`,
        description: form.description,
        done: false,
        timestampCreateTime: currentDate.getTime(),
        timestampDeadlineTime: deadlineTime,
      };
      addTodo(item);

      resetValue();
    } else {
      console.log("Заполните данные");
    }
  };

  return (
    <form className={styles.form}>
      <div className={styles.row}>
        <div className={`${styles.item} ${styles.name}`}>
          <label className={styles.label}>Название задачи</label>
          <input
            className={`${styles.input} ${styles.input_name}`}
            type="text"
            name="name"
            value={form.name}
            onChange={onChange}
            required={true}
          />
        </div>

        <div className={styles.item}>
          <label className={styles.label}>Сроки выполнения</label>
          <div className={styles.deadlines}>
            <input
              name="time"
              value={form.time}
              onChange={onChange}
              className={`${styles.input}`}
              type="time"
              required={true}
            />
            <input
              name="date"
              value={form.date}
              onChange={onChange}
              className={`${styles.input} ${styles.input_date}`}
              type="date"
              required={true}
            />
          </div>
        </div>
      </div>
      <div className={`${styles.item} ${styles.textarea}`}>
        <label className={styles.label}>Опишите задачу</label>
        <textarea
          name="description"
          value={form.description}
          onChange={onChange}
          className={`${styles.input} ${styles.input_textarea}`}
        ></textarea>
      </div>
      <button onClick={saveItem} type="button" className={styles.btn}>
        Добавить задачу
      </button>
    </form>
  );
};
