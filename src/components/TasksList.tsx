// import { Empty } from './Empty'
import { Task } from './Task'
import styles from './TasksList.module.css'

export function TasksList() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.tasksInfo}>
          <div className={styles.tasksCreated}>
            <h4>Tarefas criadas</h4>
            <strong>0</strong>
          </div>
          <div className={styles.tasksEnds}>
            <h4>Concluídas</h4>
            <strong>2 de 5</strong>
          </div>
        </div>
        <Task />
        <Task />
        {/* <Empty /> */}
      </div>
    </>
  )
}
