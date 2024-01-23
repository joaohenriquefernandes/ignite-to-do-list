import { Trash } from 'phosphor-react';
import styles from './Task.module.css';

interface ITaskProps {
  content: string;
  id: number;
  isChecked: boolean;
  onDelete: (id: number) => void;
  onToggleTaskStatus: (id: number,  value: boolean) => void;
}

export function Task({ content, id, onDelete, isChecked, onToggleTaskStatus }: ITaskProps) {

  function handleTaskToggle() {
    onToggleTaskStatus(id, !isChecked)
  }

  function handleDeleteTask(){
    onDelete(id)
  }

  return (
    <div className={styles.container}>
        <input type="checkbox" name="" id="task" checked={isChecked} onChange={handleTaskToggle}/>
        <label htmlFor="task" className={isChecked ? styles.textScratched : styles.text } >{content}</label>
          <button onClick={handleDeleteTask}>
            <Trash size={20}/>
          </button>

    </div>
  )
}
