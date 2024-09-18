import styles from './AnimationBlock.module.scss'

function AnimationBlock() {
  return (
    <div className={styles.animationBlock}>
      <div className={styles.col}>
        <p>К выполнению</p>
        <div className={styles.block}></div>
        <div className={styles.blockSec}></div>
      </div>
      <div className={styles.col}>
        <p>В работе</p>
      </div>
      <div className={styles.col}>
        <p>Завершено</p>
      </div>
    </div>
  )
}

export default AnimationBlock
