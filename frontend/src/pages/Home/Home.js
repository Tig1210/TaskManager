import AnimationBlockTasks from '../../components/Animations/AnimationBlockTasks/AnimationBlockTasks'
import Header from '../../components/Header/Header'
import Main from '../../components/Main/Main'
import Dashboard from '../Dashboard/Dashboard'
import styles from './Home.module.scss'

function Home() {
  const auth = true

  return (
    <>
      <Header />
      <Main>
        <div className={styles.main}>
          {auth ? (
            <Dashboard />
          ) : (
            <div className={styles.welcome} key={2}>
              <h1>Добро пожаловать в приложение TaskManager</h1>
              <p>Организовывайте свои задачи с легкостью и с удобством</p>
              <AnimationBlockTasks />
            </div>
          )}
        </div>
      </Main>
    </>
  )
}

export default Home
