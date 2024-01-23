import { ITask } from '../App';
import { Empty } from './Empty';
import { Task } from './Task';
import styles from './TasksList.module.css';

interface TasksListProps {
  tasks: ITask[];
  count: number
  onDelete: (id: number) => void;
  onToggleTaskStatus: (id: number,  value: boolean) => void
}

export function TasksList({ tasks, onDelete, onToggleTaskStatus, count }: TasksListProps) {

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
            <strong>{`${count} de ${tasks.length}`}</strong>
          </div>
        </div>
        {
          tasks.length !== 0
            ? tasks.map(task => (
              <Task
                key={task.id}
                content={task.text}
                id={task.id}
                isChecked={task.isChecked}
                onDelete={onDelete}
                onToggleTaskStatus={onToggleTaskStatus}
              />)
            )
            : <Empty />
        }
      </div>
    </>
  )
}
