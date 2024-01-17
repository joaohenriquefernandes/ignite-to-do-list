import { Trash } from 'phosphor-react';
import { useState } from 'react';
import styles from './Task.module.css';

interface ITaskProps {
  content: string;
  isChecked: boolean;
  id: number
  onDelete: (id: number) => void;
}

export function Task({ content, isChecked, id, onDelete }: ITaskProps) {
  const [checked, setChecked] = useState(isChecked)

  function checkedToggle() {
    setChecked(prevState => !prevState)
  }

  function handleDeleteTask(){
    onDelete(id)
  }

  return (
    <div className={styles.container}>
      <input type="checkbox" name="" id="task" checked={checked} onChange={checkedToggle}/>
      <label htmlFor="task" className={checked ? styles.textScratched : styles.text }>{content}</label>
      <button onClick={handleDeleteTask}>
        <Trash size={20}/>
      </button>
    </div>
  )
}
