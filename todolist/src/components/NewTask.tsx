import styles from "./NewTask.module.css";
import add from "../assets/plus.png"

export function NewTask() {
    return(
        <div className={styles.newTask}>
            <input type="text" name="task" id="" placeholder="Adicione uma nova tarefa" />
            <button  type="submit">
                <div className={styles.contentButtom}>
                    <span>Criar</span><img src={add} alt="Adicionar nova tarefa"/>
                </div>
            </button>
        </div>
    )
}