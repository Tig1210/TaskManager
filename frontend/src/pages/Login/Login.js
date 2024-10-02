import { useDispatch } from 'react-redux'
import Form from '../../components/Form/Form'

// import Loader from '../../components/Loader/Loader'
// import { fetchUserLogin } from '../../store/reducers/userInfo/userInfo'
// import { useEffect } from 'react'
// import { updateSession } from '../../store/reducers/userSession/userSession'
// import showAlert from '../../store/reducers/showAlert/showAlert'
import { fetchLogin } from '../../api/auth/auth'
import {
  resetShowAlert,
  showText,
} from '../../store/reducers/showAlert/showAlert'
import { useNavigate } from 'react-router-dom'

function Login() {
  const loginForm = {
    formName: 'login',
    inputsList: [
      { name: 'login', label: 'Логин', value: '' },
      { name: 'password', label: 'Пароль', value: '' },
    ],
    submitName: 'Войти',
  }

  const dispatch = useDispatch()
  const navigate = useNavigate()
  // console.log(navigate)

  const sendLoginData = async (data, setLoading) => {
    dispatch(resetShowAlert())
    const res = await fetchLogin(data, setLoading)
    console.log(res)
    if (res.name === 'Error') {
      dispatch(showText({ text: res.message, error: res.name }))
    } else {
      sessionStorage.setItem('auth', res.token)
      sessionStorage.setItem('session', true)
      navigate('/')
    }
  }

  return (
    <>
      <Form form={loginForm} submitBtn={sendLoginData} />
    </>
  )
}

export default Login
