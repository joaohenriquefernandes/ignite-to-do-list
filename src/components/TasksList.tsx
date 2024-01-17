import { ITask } from '../App';
import { Empty } from './Empty';
import { Task } from './Task';
import styles from './TasksList.module.css';

interface TasksListProps {
  tasks: ITask[];
  onDelete: (id: number) => void;
}

export function TasksList({ tasks, onDelete }: TasksListProps) {

  const checkedTasksCounter = tasks.reduce((prevValue, currentTask) => {
    if (currentTask.isChecked) {
      return prevValue + 1
    }

    return prevValue
  }, 0)

  return (
    <>
      <div className={styles.container}>
        <div className={styles.tasksInfo}>
          <div className={styles.tasksCreated}>
            <h4>Tarefas criadas</h4>
            <strong>{tasks.length}</strong>
          </div>
          <div className={styles.tasksEnds}>
            <h4>Concluídas</h4>
            <strong>{`${checkedTasksCounter} de ${tasks.length}`}</strong>
          </div>
        </div>
        {
          tasks
            ? tasks.map(task => (
              <Task
                key={task.id}
                content={task.text}
                isChecked={task.isChecked}
                id={task.id}
                onDelete={onDelete}
              />))
            : <Empty />
        }
      </div>
    </>
  )
}
