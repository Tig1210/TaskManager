// import AlertMessage from '../../components/AlertMessage/AlertMessage'
import { useDispatch } from 'react-redux'
import { fetchRegistration } from '../../api/auth/auth'
import Form from '../../components/Form/Form'
import {
  resetShowAlert,
  showText,
} from '../../store/reducers/showAlert/showAlert'
import { useNavigate } from 'react-router-dom'

function Registration() {
  const registrationForm = {
    formName: 'registration',
    inputsList: [
      { name: 'name', label: 'Имя', value: '' },
      { name: 'mail', label: 'Почта', value: '' },
      { name: 'login', label: 'Логин', value: '' },
      { name: 'password', label: 'Пароль', value: '' },
    ],
    submitName: 'Зарегестрироваться',
  }

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const sendLoginRegistration = async (data) => {
    dispatch(resetShowAlert())
    const res = await fetchRegistration(data)
    dispatch(showText({ text: res.message, error: res.name }))
    if (res.name !== 'Error') {
      navigate('/login')
    }
  }

  return (
    <>
      <Form form={registrationForm} submitBtn={sendLoginRegistration} />
    </>
  )
}

export default Registration
