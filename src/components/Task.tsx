import styles from "./Task.module.css";

import { Trash, CheckCircle } from "phosphor-react";
import {TasksProps} from "../App"

interface TaskProps{
   task: TasksProps;
   deleteATask: (taskId:string) => void;
   onDone: (taskId: string) => void;
}
export function Task({ task, deleteATask, onDone }:TaskProps) {
    const isDone = true;

    return (
        <div className={styles.taskBox}>
            <button className={styles.inputCheck} onClick={() => onDone(task.id)}>
                {task.isDone ? <CheckCircle className={styles.iconDone} weight="fill" /> : <div />}
            </button>

            <p className={task.isDone ? styles.taskComplete : styles.taskPending}>
                {task.content}
            </p>
            <button onClick={() => deleteATask(task.id)} className={styles.deleteTask}>
                <Trash size={20} />
            </button>
        </div>
    )
}