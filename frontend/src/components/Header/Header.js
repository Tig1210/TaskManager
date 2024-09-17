import { useLocation, useNavigate } from 'react-router-dom'
import Button from '../Button/Button'
import styles from './Header.module.scss'

function Header() {
  const navigate = useNavigate()
  const location = useLocation()

  console.log(location.pathname)

  const signBtn = [
    { name: 'Войти', path: '/login' },
    { name: 'Зарегестрироваться', path: '/registration' },
  ]

  return (
    <div className={styles.main}>
      <div className={styles.content}>
        <div onClick={() => navigate('/')}>TaskManager</div>
        <div className={styles.navigation}>
          {signBtn.map((sign, index) => (
            <Button
              key={index}
              name={sign.name}
              path={sign.path}
              onClick={() => {
                navigate(sign.path)
              }}
              type={'header'}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Header
