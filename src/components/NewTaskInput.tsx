import styles from './NewTaskInput.module.css'
import {PlusCircle} from 'phosphor-react'

export function NewTaskInput() {
  return (
    <form className={styles.taskForm} action="">
      <input type="text" placeholder='Adicione uma nova tarefa'/>
      <button type='submit'>
        <strong>Criar</strong>
        <PlusCircle size={18} weight='bold'/>
      </button>
    </form>
  )
}
