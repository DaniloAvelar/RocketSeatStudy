import styles from "./Header.module.css";
import todoLogo from "../assets/rocket.png"

export function Header(){
  return (
    <header>
        <div className={styles.logo}>
            <img src={todoLogo} alt="logotipo do ToDo List" />
            <span className={styles.boxLogo}>
                <span className={styles.to}>to</span><span className={styles.do}>do</span>
            </span>
        </div>
    </header>
  )
}
