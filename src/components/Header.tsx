import toDoLogo from '../assets/toDoLogo.svg'

import styles from './Header.module.css'

export function Header() {
  return (
    <header className={styles.header}>
      <img src={toDoLogo} />
    </header>
  )
}
