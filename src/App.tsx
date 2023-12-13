import { Header } from "./components/Header"
import styles from './App.module.css'
import { NewTaskInput } from "./components/NewTaskInput"

export function App() {

  return (
    <>
      <Header />
      <main className={styles.wrapper}>
        <NewTaskInput />
      </main>
    </>
  )
}
