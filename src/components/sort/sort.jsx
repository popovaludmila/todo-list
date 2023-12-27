import styles from "./sort.module.css";

export const Sort = ({sortDeadlineTimes, sortCreateTimes}) => {
   

  return (
    <div className={styles.wrapper}>
      <span className={styles.text}>Сортировать по:</span>
        <button onClick={sortCreateTimes} className={styles.btn} type="button">дате создания</button>
        <button onClick={sortDeadlineTimes} className={styles.btn} type="button">дате выполнения</button>
    </div>
  )
}
