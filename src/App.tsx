import { useState, useEffect } from "react";

import { Header } from "./components/Header";
import { NewTask } from "./components/NewTask";
import { Tasks } from "./components/Tasks";

import styles from "./App.module.css"
import "./global.css";

const LOCAL_STORAGE_KEY = "toSaveTasks"

export interface TasksProps {
  id: string;
  content:string;
  isDone: boolean;
}

function App() {
  const [task, setTask] = useState<TasksProps[]>([])

  useEffect(() => {
    showTasksOnLocalStorage();
  }, [])

  function saveTasksOnLocalStorage(newTasks: TasksProps[]) {
    setTask(newTasks);
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(newTasks))
  }

  function showTasksOnLocalStorage() {
    const saveItems = localStorage.getItem(LOCAL_STORAGE_KEY);
    if(saveItems) {
      setTask(JSON.parse(saveItems))
    }
    
  }

  function toggleTaskDone(taskId : string) {
    const newTask = task.map((task) => {
      if(task.id == taskId){
          return {
            ...task, isDone: !task.isDone
          }
      }
      return task;
    })
    saveTasksOnLocalStorage(newTask)
  } 

  

  function addNewTask(taskContent: string) {
    saveTasksOnLocalStorage([...task, 
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
    saveTasksOnLocalStorage(newTasks)
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
