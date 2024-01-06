import { ChangeEvent, FormEvent, useState } from 'react'
import styles from './NewTaskInput.module.css'
import {PlusCircle} from 'phosphor-react'

interface INewTaskInputProps {
  onCreateNewTask: (content: string) => void
}


export function NewTaskInput({onCreateNewTask}: INewTaskInputProps) {
  const [newTaskText, setNewTaskText] = useState('')

  function handleCreateNewTask(event: FormEvent) {
    event.preventDefault()

    onCreateNewTask(newTaskText)
    setNewTaskText('')
  }

  function handleNewTaskChange(event: ChangeEvent<HTMLInputElement>) {
    event.target.setCustomValidity('')
    setNewTaskText(event.target.value)
  }

  return (
    <form className={styles.taskForm} onSubmit={handleCreateNewTask}>
      <input
        type="text"
        placeholder='Adicione uma nova tarefa'
        name='task'
        value={newTaskText}
        onChange={handleNewTaskChange}
        required
      />
      <button type='submit'>
        <strong>Criar</strong>
        <PlusCircle size={18} weight='bold'/>
      </button>
    </form>
  )
}
