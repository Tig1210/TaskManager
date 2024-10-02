import { useSelector } from 'react-redux'
import AlertMessage from '../AlertMessage/AlertMessage'
import styles from './Main.module.scss'

function Main({ children }) {
  const alertInfo = useSelector((data) => data.showAlert)
  console.log(alertInfo)

  return (
    <div className={styles.main}>
      {children}
      {alertInfo.text !== '' ? <AlertMessage alertInfo={alertInfo} /> : null}
    </div>
  )
}

export default Main
