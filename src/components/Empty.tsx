import { ClipboardText } from 'phosphor-react'
import styles from './Empty.module.css'

export function Empty() {
  return (
    <div className={styles.container}>
      <ClipboardText size={56} weight='bold' color='#808080'/>
      <div className={styles.infoEmpty}>
        <strong>Você ainda não tem tarefas cadastradas</strong>
        <p>Crie tarefas e organize seus itens a fazer</p>
      </div>
    </div>
  )
}
