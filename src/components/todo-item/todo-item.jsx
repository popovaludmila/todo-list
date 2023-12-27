import { useState } from "react";
import styles from "./todo-item.module.css";

export const TodoItem = ({ item, changeStatus, deleteTask, updateTask }) => {
  const { id, name, createTime, deadlineTime, description } = item;
  const [isShow, setIsShow] = useState(false);
  const [isEdit, setIsEdit] = useState(false);

  const [form, setValue] = useState({
    name: name,
    deadlineTime: deadlineTime,
    description: description,
  });

  const showDescription = () => {
    setIsShow(!isShow);
  };

  const onChange = (e) => {
    setValue({ ...form, [e.target.name]: e.target.value });
  };

  const editTask= () => {
    setIsEdit(!isEdit);
  };

  const saveTask = () => {
    if (form.name !== "" && form.deadlineTime !== "") {
        updateTask(id, form.name, form.description, form.deadlineTime)
    }
    setIsEdit(false);
  };

  return (
    <li className={styles.item}>
      <div className={styles.content}>
        <label className={styles.checkbox_wrapper}>
          <input
            onClick={() => changeStatus(id)}
            className={`${styles.checkbox}`}
            type="checkbox"
            defaultChecked={item.done}
          />
        </label>
        {isEdit ? (
          <form className={styles.info}>
            <div className={styles.name_wrap}>
              <input
                className={`${styles.name}`}
                value={form.name}
                type="text"
                name="name"
                onChange={onChange}
              />
              <span className={`${styles.time}`}>
                Дата создания:{createTime}
              </span>
            </div>
            <span className={`${styles.time} ${styles.time_deadline}`}>
              до &nbsp;{" "}
            </span>
            <input
              type="text"
              name="deadlineTime"
              onChange={onChange}
              value={form.deadlineTime}
            />
            {description !== "" && (
              <textarea
                rows={1}
                className={`${styles.description} ${styles.description_wrap}`}
                value={form.description}
                name="description"
                onChange={onChange}
              >
                
              </textarea>
            )}
          </form>
        ) : (
          <div className={styles.info}>
            <div className={styles.name_wrap}>
              <p
                className={
                  item.done
                    ? `${styles.name} ${styles.through}`
                    : `${styles.name}`
                }
              >
                {name}
              </p>
              <span className={`${styles.time}`}>
                Дата создания: {createTime}
              </span>
            </div>
            {description !== "" && (
              <button
                className={
                  isShow
                    ? `${styles.btn} ${styles.btn_desc} ${styles.rotate} `
                    : `${styles.btn} ${styles.btn_desc} `
                }
                onClick={showDescription}
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 16 16"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M8 11.89l-1.414-1.415-4.95-4.95L3.05 4.111 8 9.06l4.95-4.95 1.414 1.414-4.95 4.95L8 11.889z"
                    fill="#000"
                  ></path>
                </svg>
              </button>
            )}
            <span className={`${styles.time} ${styles.time_deadline}`}>
              до {deadlineTime}
            </span>
          </div>
        )}
        <button
          className={`${styles.btn} ${styles.btn_edit}`}
          onClick={editTask}
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 16 16"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M11.442 1.707a1.21 1.21 0 011.71 0l1.142 1.14a1.21 1.21 0 010 1.711l-.856.856-2.852-2.852.856-.855zM9.31 3.839L3.164 9.985l-.91 3.714 3.761-.863 6.146-6.146L9.31 3.84z"
              fill="#ffc107"
            ></path>
          </svg>
        </button>
        {isEdit && (
          <button className={`${styles.btn}`} onClick={saveTask}>
            <svg
              width="24"
              height="24"
              viewBox="0 0 16 16"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M8 11.89l-1.414-1.415-4.95-4.95L3.05 4.111 8 9.06l4.95-4.95 1.414 1.414-4.95 4.95L8 11.889z"
                fill="green"
              ></path>
            </svg>
          </button>
        )}
        <button
          className={`${styles.btn} ${styles.btn_del}`}
          onClick={() => deleteTask(id)}
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 16 16"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M6.999.992h2l1 1.002h3V4h-10V1.994h3l1-1.002zm-3 4.01h8v8.99a1 1 0 01-1 1h-6a1 1 0 01-1-1v-8.99z"
              fill="#337"
            ></path>
          </svg>
        </button>
      </div>
      {isShow && !isEdit && <p className={styles.description}>{description}</p>}
    </li>
  );
};
