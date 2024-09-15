import styles from './Input.module.scss'

function Input({ inputInfo, updateInputForm }) {
  return (
    <div className={styles.main}>
      <label>{inputInfo.label}</label>
      <input
        value={inputInfo.value}
        onChange={(e) => updateInputForm(inputInfo, e.target.value)}
      />
    </div>
  )
}

export default Input
