import { useLocation, useNavigate } from 'react-router-dom'
import Button from '../Button/Button'
import styles from './Header.module.scss'

import { ReactComponent as ArrowDownIcon } from '../../assets/icons/arrow-down.svg'
import { ReactComponent as DashboardIcon } from '../../assets/icons/sessionNavigation/dashboard.svg'
import { ReactComponent as CalendarIcon } from '../../assets/icons/sessionNavigation/calendar.svg'
import { ReactComponent as TableIcon } from '../../assets/icons/sessionNavigation/table.svg'
import { useState } from 'react'
import DropDown from '../DropDown/DropDown'

function Header() {
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

  const dropDownBtns = [
    {
      id: 1,
      name: 'Информация',
      onClick: () => {
        navigate('/info')
      },
    },
    {
      id: 2,
      name: 'Выйти',
      onClick: () => {
        sessionStorage.clear()
        navigate('/login')
      },
    },
  ]

  const sessionNavigation = [
    { id: 1, name: 'Доска', icon: <DashboardIcon />, path: '/' },
    { id: 2, name: 'Таблица', icon: <TableIcon />, path: '/table' },
    { id: 3, name: 'Календарь', icon: <CalendarIcon />, path: '/calendar' },
  ]

  return (
    <div className={styles.main}>
      <div className={styles.content}>
        <div onClick={() => navigate('/')}>TaskManager</div>
        {session ? (
          <div className={styles.sessionNav}>
            {sessionNavigation.map((nav, index) => (
              <Button
                key={index}
                name={nav.name}
                path={nav.path}
                type={'header'}
                onClick={() => {
                  navigate(nav.path)
                }}
                icon={nav.icon}
              />
            ))}
          </div>
        ) : null}
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
              {active ? <DropDown dropDownList={dropDownBtns} /> : null}
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
