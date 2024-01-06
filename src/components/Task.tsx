import { Trash } from'phosphor-react'
import styles from './Task.module.css'
import { useState } from 'react';

interface ITaskProps {
  content: string;
  isChecked: boolean;
}

export function Task({ content, isChecked }: ITaskProps) {
  const [checked, setChecked] = useState(isChecked)

  function checkedToggle() {
    setChecked(prevState => !prevState)
  }

  return (
    <div className={styles.container}>
      <input type="checkbox" name="" id="task" checked={checked} onChange={checkedToggle}/>
      <label htmlFor="task" className={checked ? styles.textScratched : styles.text }>{content}</label>
      <button>
        <Trash size={20}/>
      </button>
    </div>
  )
}
