import styles from './Dashboard.module.scss'

function Dashboard() {
  return (
    <div className={styles.main}>
      <div className={styles.menu}>
        <div className={styles.block}></div>
      </div>
      <div className={styles.dashboard}>
        <div className={styles.table}>
          <table>
            <thead>
              <tr>
                <td>К выполнению</td>
                <td>В процессе</td>
                <td>Завершен</td>
                <td>Завершен</td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>sdfhsdfkldsfdfslkh</td>
                <td>sdfhsdfkldsfdfslkh</td>
                <td>sdfhsdfkldsfdfslkh</td>
                <td>sdfhsdfkldsfdfslkh</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
