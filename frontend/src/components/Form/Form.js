import { useEffect, useState } from 'react'
import styles from './Form.module.scss'
import Input from '../Input/Input'
import Button from '../Button/Button'
import { editFormData } from '../../utils/editFormData/editFormData'
import { checkInput } from '../../utils/checkInput/checkInput'

function Form({ form, submitBtn }) {
  const { formName, inputsList, submitName } = form
  const [infoForm, setInfoForm] = useState(inputsList)
  const [loading, setLoading] = useState(false)
  const [disableBtn, setDisableBtn] = useState(true)

  console.log(formName)

  const handleApi = () => {
    const user = editFormData(infoForm)
    submitBtn(user, setLoading)
  }

  useEffect(() => {
    if (
      infoForm.some((el) => el.value === '' || checkInput(el.value, el.name))
    ) {
      setDisableBtn(true)
    } else {
      setDisableBtn(false)
    }
  }, [infoForm])

  return (
    <div className={styles.main}>
      <div className={styles.content}>
        {infoForm.map((input, index) => (
          <Input key={index} inputInfo={input} setInfoForm={setInfoForm} />
        ))}
        <Button
          type={'form'}
          disabled={disableBtn}
          name={submitName}
          onClick={handleApi}
          loading={loading}
        />
      </div>
    </div>
  )
}

export default Form
