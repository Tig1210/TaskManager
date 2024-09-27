import { useEffect, useState } from 'react'
import styles from './AlertMessage.module.scss'

function AlertMessage({ error, data }) {
  const [animateBack, setAnimateBack] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      setAnimateBack(true)
    }, 5000)
  }, [])

  return (
    <div
      className={`${styles.main} ${!animateBack ? styles.animateShow : styles.animateHide}`}
    >
      <div className={styles.content}>
        {data && <p>{data.message}</p>}
        {error && <p>{error}</p>}
        <div
          className={`${styles.line} ${styles.animateLine}`}
          style={{ backgroundColor: error ? 'red' : 'green' }}
        ></div>
      </div>
    </div>
  )
}

export default AlertMessage
