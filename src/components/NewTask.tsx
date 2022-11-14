import {PlusCircle} from 'phosphor-react'
import { ChangeEvent, FormEvent, InvalidEvent, useState } from 'react';

import styles from "./NewTask.module.css"

interface NewTaskProps {
    onTaskAdd:(textTask : string) => void;
}

export function NewTask({ onTaskAdd } : NewTaskProps) {
    const [content, setContent] = useState('')

    function handleNewTaskChange (e:ChangeEvent<HTMLInputElement>) {
        setContent(e.target.value);
    }

    function handleSubmit(e: FormEvent) {
        e.preventDefault();

        onTaskAdd(content);
        console.log(content)
        setContent("");
    }
    return (
        <article className={styles.formBox}>
            <form className={styles.form} onSubmit={handleSubmit}>
                <input 
                    className={styles.input} 
                    type="text" 
                    placeholder="Adicione uma nova tarefa" 
                    value={content}
                    onChange={handleNewTaskChange}
                />
                <button type="submit">
                    Criar
                    <PlusCircle size={20} />
                </button>
            </form>
        </article>
    )
}