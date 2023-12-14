import { Header } from "./components/Header"
import { NewTaskInput } from "./components/NewTaskInput"

import styles from './App.module.css'
import { TasksList } from "./components/TasksList"

export function App() {

  return (
    <>
      <Header />
      <main className={styles.wrapper}>
        <NewTaskInput />

        <div className={styles.toDoList}>
          <TasksList />
        </div>
      </main>
    </>
  )
}
