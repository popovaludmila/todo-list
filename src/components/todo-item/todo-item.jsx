import { useState } from "react";
import styles from "./todo-item.module.css";

export const TodoItem = ({ item, changeStatus, deleteTask }) => {
  const { id, name, createTime, deadlineTime, description } = item;
  const [isShow, setIsShow] = useState(false);

  const showDescription = () => {
    setIsShow(!isShow);
  };

  return (
    <li className={styles.item}>
      <div className={styles.content}>
        <div className={styles.info}>
          <input
            className={`${styles.checkbox} visually-hidden`}
            type="checkbox"
            defaultChecked={item.done}
          />
          <div className={styles.name_wrap} onClick={() => changeStatus(id)}>
            <p className={styles.name}>{name}</p>

            <span className={`${styles.time}`}>{createTime}</span>
          </div>
          {description !== "" && (
            <button
              className={isShow ? `${styles.btn} ${styles.btn_desc} ${styles.rotate} `: `${styles.btn} ${styles.btn_desc} `}
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
            {deadlineTime}
          </span>
        </div>
        <button className={`${styles.btn} ${styles.btn_edit}`}>
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
      {isShow && <p className={styles.description}>{description}</p>}
    </li>
  );
};
