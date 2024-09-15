import { useSelector } from 'react-redux'
import styles from './Button.module.scss'

function Button({ ...props }) {
  const { name, onClick, path } = props

  const activeScreen = useSelector((state) => state.activeScreen)
  console.log(activeScreen)

  const disableActiveBtn = () => {
    if (activeScreen.path !== path) {
      return onClick
    }
  }

  const activeBtn = () => {
    if (activeScreen.path === path) {
      return ' ' + styles.disabled
    } else {
      return ' '
    }
  }

  return (
    <div className={styles.default + activeBtn()} onClick={disableActiveBtn()}>
      <p>{name}</p>
    </div>
  )
}

export default Button
