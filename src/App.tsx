import { Header } from "./components/Header"
import { NewTaskInput } from "./components/NewTaskInput"
import { Empty } from "./components/Empty"

import styles from './App.module.css'

export function App() {

  return (
    <>
      <Header />
      <main className={styles.wrapper}>
        <NewTaskInput />

        <div className={styles.toDoList}>
          <Empty />
        </div>
      </main>
    </>
  )
}
