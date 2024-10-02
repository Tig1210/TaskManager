import { useEffect } from 'react'
import AnimationBlockTasks from '../../components/Animations/AnimationBlockTasks/AnimationBlockTasks'

import Dashboard from '../Dashboard/Dashboard'
import styles from './Home.module.scss'

function Home() {
  const session = sessionStorage.getItem('session')
  console.log(session)

  useEffect(() => {
    console.log(session)
  }, [session])

  return (
    <>
      <div className={styles.main}>
        {session === 'true' ? (
          <Dashboard />
        ) : (
          <div className={styles.welcome} key={2}>
            <h1>Добро пожаловать в приложение TaskManager</h1>
            <p>Организовывайте свои задачи с легкостью и с удобством</p>
            <AnimationBlockTasks />
          </div>
        )}
      </div>
    </>
  )
}

export default Home
