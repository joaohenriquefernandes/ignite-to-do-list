import { Trash } from'phosphor-react'
import styles from './Task.module.css'

export function Task() {
  const teste = false;
  return (
    <div className={styles.container}>
      <input type="checkbox" name="" id="task"/>
      <label htmlFor="task" className={teste ? styles.textScratched : styles.text }>Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.</label>
      <button>
        <Trash size={20}/>
      </button>
    </div>
  )
}
