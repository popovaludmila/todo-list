import { Header } from "../header/header";
import styles from "./app.module.css";

export const App = () => {
    return (
        <div className="container">
            <div className={styles.inner}>
                <h1 className={styles.title}>Планирощик задач</h1>

                <Header />
            </div>
        </div>
    )
}