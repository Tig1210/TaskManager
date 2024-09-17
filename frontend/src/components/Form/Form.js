import { useState } from 'react'
import styles from './Form.module.scss'
import Input from '../Input/Input'
import Button from '../Button/Button'
import { submitForm } from '../../utils/submitForm/submitForm'

function Form({ form }) {
  const { formName, inputsList, submitName } = form

  const [infoForm, setInfoForm] = useState(inputsList)

  console.log(formName, infoForm)

  return (
    <div className={styles.main}>
      <div className={styles.content}>
        {infoForm.map((input, index) => (
          <Input key={index} inputInfo={input} setInfoForm={setInfoForm} />
        ))}
        <Button
          type={'form'}
          disabled={true}
          name={submitName}
          onClick={() => submitForm(formName)}
        />
      </div>
    </div>
  )
}

export default Form
