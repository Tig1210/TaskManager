import Headers from '../../components/Header/Header.js'
import Main from '../../components/Main/Main.js'
import AnimationBlock from './components/AnimationBlock/AnimationBlock.js'

import styles from './Welcome.module.scss'

function Welcome() {
  return (
    <>
      <Headers />
      <Main>
        <div className={styles.welcome}>
          <h1>Добро пожаловать в приложение TaskManager</h1>
          <p>Организовывайте свои задачи с легкостью и с удобством</p>
          <AnimationBlock />
        </div>
      </Main>
    </>
  )
}

export default Welcome
