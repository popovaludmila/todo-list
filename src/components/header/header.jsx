import styles from "./header.module.css";

export const Header = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.row}>
        <div className={`${styles.item} ${styles.name}`}>
          <label className={styles.label}>Название задачи</label>
          <input className={`${styles.input} ${styles.input_name}`} type="text" />
        </div>

        <div className={styles.item}>
          <label className={styles.label}>Сроки выполнения</label>
          <div className={styles.deadlines}>
            <input className={`${styles.input}`} type="time" />
            <input className={`${styles.input} ${styles.input_date}`} type="date" />
          </div>
        </div>
      </div>
      <div className={`${styles.item} ${styles.textarea}`}>
        <label className={styles.label}>Опишите задачу</label>
        <textarea className={`${styles.input} ${styles.input_textarea}`}></textarea>
      </div>
      <button type="button" className={styles.btn}>Добавить задачу</button>
    </div>
  );
};
