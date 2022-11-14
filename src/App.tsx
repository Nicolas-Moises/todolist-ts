import { useState } from "react";

import { Header } from "./components/Header";
import { NewTask } from "./components/NewTask";
import { Tasks } from "./components/Tasks";

import styles from "./App.module.css"
import "./global.css";

export interface TasksProps {
  id: string;
  content:string;
  isDone: boolean;
}

function App() {
  const [task, setTask] = useState<TasksProps[]>([])

  function toggleTaskDone(taskId : string) {
    const newTask = task.map((task) => {
      if(task.id == taskId){
          return {
            ...task, isDone: !task.isDone
          }
      }
      return task;
    })
    setTask(newTask)
  } 

  

  function addNewTask(taskContent: string) {
    setTask([...task, 
      { 
        id: crypto.randomUUID(), 
        content: taskContent,
        isDone: false 
      }
    ])
  } 

  function deleteTask(taskId: string) {
    const newTasks = task.filter((task) => {
      return task.id != taskId;
    })
    setTask(newTasks)
  }
  
  return (
    <div>
      <Header />
      <main className={styles.bodyPadding}></main>
      <NewTask onTaskAdd = {addNewTask} />
      <Tasks
        tasks = {task}
        onDeleteTask={deleteTask}
        toggleTaskDone = {toggleTaskDone}
      />
    </div>
  )
}

export default App
