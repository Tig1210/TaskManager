import { useState } from 'react'
import styles from './Input.module.scss'
import { checkInput } from '../../utils/checkInput/checkInput'

function Input({ inputInfo, setInfoForm }) {
  const [currentValue, setCurrentValue] = useState('')

  const handleChange = (input, e) => {
    setCurrentValue(e.target.value)
    setInfoForm((prev) =>
      prev.map((el) =>
        el.name === input.name ? { ...el, value: e.target.value } : el
      )
    )
  }

  return (
    <div className={styles.main}>
      <label>{inputInfo.label}</label>
      <input
        value={inputInfo.value}
        onChange={(e) => handleChange(inputInfo, e)}
      />
      {currentValue.length > 0 ? (
        <p className={styles.error}>
          {checkInput(currentValue, inputInfo.name)}
        </p>
      ) : (
        ''
      )}
    </div>
  )
}

export default Input
