import styles from "./ToDoList.module.css";
import iconWithoutTask from "../assets/Clipboard.png";
import { useState } from "react";
import { FaTrash } from 'react-icons/fa';

export function TodoList() {

    const [createdTask, setCreatedTask] = useState(1);
    const [checked, setChecked] = useState(false);

    const handleChange = () => {
        setChecked(!checked);
        console.log(checked);

    }

    return (
        <div className={styles.listContent}>
            <header className={styles.headerList}>
                <span className={styles.created}>Tarefas criadas: <span className={styles.createdResult}>{createdTask}</span></span>
                <span className={styles.completed}>Concluídas: <span className={styles.completedResult}>12</span></span>
            </header>

            {createdTask === 0 && (
                <div>
                    <div className={styles.divider}></div>
                    <div className={styles.task}>
                        <div className={styles.emptTask}>
                            <img src={iconWithoutTask} alt="" />
                            <p style={{ fontWeight: 'bold', fontSize: 16 }}>Você ainda não tem tarefas cadastradas</p>
                            <p>Crie tarefas e organize seus itens a fazer</p>
                        </div>
                    </div>
                </div>
            )}
            {/* Lista de tarrefas criadas */}
            <div className={
                checked
                ? styles.taskToDoChecked
                : styles.taskToDo
                }
            >
                <div>
                    <input
                        type="checkbox"
                        id="todo"
                        checked={checked}
                        onChange={handleChange}
                        className={styles.inputRadio}
                    />
                </div>
                <span
                    className={
                        checked 
                        ? styles.checkedSpan 
                        : styles.uncheckedSpan
                    }
                >
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi recusandae, consectetur aspernatur, eum ullam facilis cumque hic ut repellendus iure, similique ab eveniet dolor animi natus. Nobis facere tenetur tempore!
                </span>
                <div className={styles.iconsTrash}>
                    <FaTrash className={styles.trashIcon} />
                </div>
            </div>
        </div>
    )
}