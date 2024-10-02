import { useEffect, useState } from 'react'
import styles from './AlertMessage.module.scss'
import { useDispatch } from 'react-redux'
import { resetShowAlert } from '../../store/reducers/showAlert/showAlert'

function AlertMessage({ alertInfo }) {
  const [animateBack, setAnimateBack] = useState(false)
  const dispatch = useDispatch()

  useEffect(() => {
    setTimeout(() => {
      setAnimateBack(true)
      dispatch(resetShowAlert())
    }, 5000)
  }, [])

  return (
    <div
      className={`${styles.main} ${!animateBack ? styles.animateShow : styles.animateHide}`}
    >
      <div className={styles.content}>
        <p>{alertInfo.text}</p>
        <div
          className={`${styles.line} ${styles.animateLine}`}
          style={{ backgroundColor: alertInfo?.error ? 'red' : 'green' }}
        ></div>
      </div>
    </div>
  )
}

export default AlertMessage
