// import { useSelector } from 'react-redux'
import styles from './Button.module.scss'
import { useLocation } from 'react-router-dom'

function Button({ ...props }) {
  const location = useLocation()

  const { name, onClick, path, type, disabled } = props
  console.log(disabled)

  const stylesBtn = {
    header: styles.default,
    form: styles.form,
  }

  const disabledBtn = () => {
    if (type === 'header') {
      if (location.pathname !== path) {
        return false
      } else {
        return true
      }
    }
    if (type === 'form') {
      return disabled
    }
  }

  return (
    <button
      className={stylesBtn[type]}
      onClick={onClick}
      disabled={disabledBtn()}
    >
      {name}
    </button>
  )
}

export default Button
