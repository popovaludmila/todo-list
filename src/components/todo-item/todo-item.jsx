import styles from "./todo-item.module.css";

export const TodoItem = () => {
  return (
    <li className={styles.item}>
      <input className={`${styles.checkbox} visually-hidden`} type="checkbox" name="" id="" checked={true} />
      <div className={styles.content}>
        <div className={styles.info}>
          <p className={styles.name}>Планирую</p>
          <span className={`${styles.time} ${styles.time_created}`}>05.03.2023</span>
          <span className={`${styles.time}`}>05.08.2023</span>
        </div>
        <button className={`${styles.btn}`}>
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
        <button className={`${styles.btn}`}>
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
              fill="#222"
            ></path>
          </svg>
        </button>
      </div>
    </li>
  );
};
