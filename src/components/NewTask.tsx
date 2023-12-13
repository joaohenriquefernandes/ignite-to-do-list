import styles from './NewTask.module.css'
import {PlusCircle} from 'phosphor-react'

export function NewTask() {
  return (
    <form className={styles.taskForm} action="">
      <input type="text" placeholder='Adicione uma nova tarefa'/>
      <button type='submit'>
        <strong>Criar</strong>
        <PlusCircle size={16} weight='bold'/>
      </button>
    </form>
  )
}
