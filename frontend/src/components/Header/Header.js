import styles from './Header.module.scss'

function Header() {
  return (
    <div className={styles.main}>
      <div className={styles.content}>
        <div></div>
        <div>
          <p>Войти</p>
          <p>Зарегестрироваться</p>
        </div>
      </div>
    </div>
  )
}

export default Header
