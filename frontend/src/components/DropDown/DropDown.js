import styles from './DropDown.module.scss'

function DropDown() {
  return (
    <div className={styles.main}>
      <div className={styles.content}>
        <div className={styles.btn}></div>
        <div className={styles.btn}></div>
        <div className={styles.btn}></div>
        <div className={styles.btn}></div>
        <div className={styles.btn}></div>
      </div>
    </div>
  )
}

export default DropDown
