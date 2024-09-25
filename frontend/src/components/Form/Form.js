import { useState } from 'react'
import styles from './Form.module.scss'
import Input from '../Input/Input'
import Button from '../Button/Button'
// import { submitForm } from '../../utils/submitForm/submitForm'
import { editFormData } from '../../utils/editFormData/editFormData'

function Form({ form, submit }) {
  const { formName, inputsList, submitName } = form

  const [infoForm, setInfoForm] = useState(inputsList)

  console.log(formName, infoForm)

  const handleApi = () => {
    const user = editFormData(infoForm)
    submit(user)
  }

  return (
    <div className={styles.main}>
      <div className={styles.content}>
        {infoForm.map((input, index) => (
          <Input key={index} inputInfo={input} setInfoForm={setInfoForm} />
        ))}
        <Button
          type={'form'}
          disabled={false}
          name={submitName}
          onClick={handleApi}
        />
      </div>
    </div>
  )
}

export default Form
