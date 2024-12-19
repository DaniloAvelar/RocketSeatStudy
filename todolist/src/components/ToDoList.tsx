import styles from "./ToDoList.module.css";
import iconWithoutTask from "../assets/Clipboard.png";

export function TodoList() {
    return (
        <div className={styles.listContent}>
            <header className={styles.headerList}>
                <span className={styles.created}>Tarefas criadas: <span className={styles.createdResult}>4</span></span>
                <span className={styles.completed}>Concluídas: <span className={styles.completedResult}>12</span></span>
            </header>
            <div className={styles.divider}></div>
            <div className={styles.task}>
                <div className={styles.emptTask}>
                    <img src={iconWithoutTask} alt="" />
                    <p style={{ fontWeight: 'bold', fontSize:16 }}>Você ainda não tem tarefas cadastradas</p>
                    <p>Crie tarefas e organize seus itens a fazer</p>
                </div>
            </div>
        </div>
    )
}