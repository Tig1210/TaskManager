import { useLocation, useNavigate } from 'react-router-dom'
import Button from '../Button/Button'
import styles from './Header.module.scss'
import { useDispatch } from 'react-redux'
import { setActiveScreen } from '../../store/reducers/activeScreen/activeScreenSlice'

function Header() {
  const navigate = useNavigate()
  const location = useLocation()

  const dispatch = useDispatch()

  console.log(location.pathname)

  const signBtn = [
    { name: 'Войти', path: '/login' },
    { name: 'Зарегестрироваться', path: '/registration' },
  ]

  return (
    <div className={styles.main}>
      <div className={styles.content}>
        <div>TaskManager</div>
        <div className={styles.navigation}>
          {/* <Button
            name={'Войти'}
            path={'/login'}
            onClick={() => {
              navigate('/login')
              dispatch(setActiveScreen('/login'))
            }}
          />
          <Button
            name={'Зарегестрироваться'}
            path={'/registration'}
            onClick={() => {
              navigate('/registration')
              dispatch(setActiveScreen('/registration'))
            }}
          /> */}
          {signBtn.map((sign, index) => (
            <Button
              key={index}
              name={sign.name}
              path={sign.path}
              onClick={() => {
                navigate(sign.path)
                dispatch(setActiveScreen(sign.path))
              }}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Header
