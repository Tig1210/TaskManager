import { useState } from 'react'
import styles from './Form.module.scss'
import Input from '../Input/Input'

function Form({ form }) {
  const [infoForm, setInfoForm] = useState(form)

  console.log(infoForm)

  const updateInputForm = (currentInput, currentValue) => {
    const newInfoForm = [...infoForm]

    const findInput = newInfoForm.find(
      (info) => info.name === currentInput.name
    )

    if (findInput) {
      findInput.value = currentValue
    }

    setInfoForm(newInfoForm)
  }

  return (
    <div className={styles.main}>
      <div className={styles.content}>
        {infoForm.map((input, index) => (
          <Input
            key={index}
            inputInfo={input}
            updateInputForm={updateInputForm}
          />
        ))}
      </div>
    </div>
  )
}

export default Form
