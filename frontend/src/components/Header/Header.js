import { useLocation, useNavigate } from 'react-router-dom'
import Button from '../Button/Button'
import styles from './Header.module.scss'

import { ReactComponent as ArrowDownIcon } from '../../assets/icons/arrow-down.svg'
import { useState } from 'react'
import DropDown from '../DropDown/DropDown'
import { useSelector } from 'react-redux'

function Header() {
  const auth = useSelector((data) => data.userSession)

  console.log(auth)

  const [active, setActive] = useState(false)

  const navigate = useNavigate()
  const location = useLocation()

  console.log(location.pathname)

  // const { session } = auth

  const signBtn = [
    { name: 'Войти', path: '/login' },
    { name: 'Зарегестрироваться', path: '/registration' },
  ]

  const activeBtn = () => {
    if (active === true) {
      return styles.iconActive
    } else {
      return ''
    }
  }
  let session = sessionStorage.getItem('session')

  return (
    <div className={styles.main}>
      <div className={styles.content}>
        <div onClick={() => navigate('/')}>TaskManager</div>
        <div className={styles.navigation}>
          {session ? (
            <div className={styles.user} onClick={() => setActive(!active)}>
              <div className={styles.avatar}></div>
              <div className={styles.userBtn}>
                <p>Username</p>
                <div className={`${styles.icon} ${activeBtn()}`}>
                  <ArrowDownIcon />
                </div>
              </div>
              {active ? <DropDown /> : null}
            </div>
          ) : (
            <>
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
            </>
          )}
        </div>
      </div>
    </div>
  )
}

export default Header
