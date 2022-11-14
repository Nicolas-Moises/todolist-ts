import styles from "./Tasks.module.css";

import { Task } from "./Task";
import { TasksProps } from '../App';

import { ClipboardText } from "phosphor-react";

import file from "../assets/file.svg"

interface TasksComponentProps {
    tasks : TasksProps[];
    onDeleteTask: (taskId:string) => void;
    toggleTaskDone : (takId: string) => void
}
export function Tasks({ tasks, onDeleteTask, toggleTaskDone }: TasksComponentProps) {
    const numberOfTasksCompleted = tasks.filter((task) => task.isDone).length
    const numberOfTasks = tasks.length;
    return (
        <section className={styles.tasksBox}>
            <header className={styles.tasksHeader}>
                <div className={styles.tasks}>
                    <span className={styles.taskCreated}>Tarefas Criadas</span>
                    <span className={styles.taskNumbered}>{numberOfTasks}</span>
                </div>
                <div className={styles.tasks}>
                    <span className={styles.taskDone}>Tarefas Concluídas</span>
                    <span className={styles.taskNumbered}>{numberOfTasksCompleted} de {numberOfTasks}</span>
                </div>
            </header>
            <div className={styles.tasksList}>
                {tasks.map((task) => {
                   return <Task key={task.id} task={task} deleteATask={onDeleteTask} onDone={toggleTaskDone} />
                })}

                {
                    tasks.length <= 0 && (
                        <article className={styles.tasksEmpty}>
                            <img src={file} />
                            <h3>Você ainda não tem tarefas cadastradas</h3>
                            <p>Crie tarefas e organize seus itens a fazer</p>
                        </article>
                    )
                }
            </div>
        </section>
    )
}