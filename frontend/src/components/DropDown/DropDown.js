import styles from './DropDown.module.scss'

function DropDown({ dropDownList }) {
  return (
    <div className={styles.main}>
      <div className={styles.content}>
        {dropDownList.map((btn) => (
          <div key={btn.id} className={styles.btn} onClick={btn.onClick}>
            <p>{btn.name}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default DropDown
