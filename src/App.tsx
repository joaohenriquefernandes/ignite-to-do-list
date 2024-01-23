import { Header } from "./components/Header"
import { NewTaskInput } from "./components/NewTaskInput"
import { TasksList } from "./components/TasksList"

import { useState } from "react"

import styles from './App.module.css'

export interface ITask {
  id: number;
  text: string;
  isChecked: boolean;
}

export function App() {
  const [tasks, setTasks] = useState<ITask[]>([])

  function createNewTask(taskName: string) {

    const newTask: ITask = {
      id: new Date().getTime(),
      text: taskName,
      isChecked: false,
    }

    setTasks( prevState => [...prevState, newTask])
  }

  function deleteTask(id: number) {
    const filteredTasks = tasks.filter(task => task.id !== id)

    setTasks(filteredTasks)
  }

  function handleToggleTask(id: number,  value: boolean) {
    const updatedTasks = tasks.map((task) => {
      if (task.id === id) {
        return { ...task, isChecked: value }
      }

      return { ...task }
    })

    setTasks(updatedTasks)
  }

  const checkedTasksCounter = tasks.reduce((prevValue, currentTask) => {
    if (currentTask.isChecked) {
      return prevValue + 1
    }

    return prevValue
  }, 0)


  return (
    <>
      <Header />
      <main className={styles.wrapper}>
        <NewTaskInput
          onCreateNewTask={createNewTask}
        />

        <div className={styles.toDoList}>
          <TasksList
            tasks={tasks}
            onDelete={deleteTask}
            onToggleTaskStatus={handleToggleTask}
            count={checkedTasksCounter}
          />
        </div>
      </main>
    </>
  )
}
