import { useDispatch, useSelector } from 'react-redux'
import AlertMessage from '../../components/AlertMessage/AlertMessage'
import Form from '../../components/Form/Form'
import Header from '../../components/Header/Header'
import Loader from '../../components/Loader/Loader'
import Main from '../../components/Main/Main'
import { fetchUserLogin } from '../../store/reducers/userInfo/userInfo'
import { useEffect } from 'react'
import { updateSession } from '../../store/reducers/userSession/userSession'

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

  const loginData = useSelector((data) => data.userInfo)

  const { data, error, loading } = loginData

  useEffect(() => {
    if (Object.keys(data).length !== 0) {
      dispatch(updateSession(data))
      sessionStorage.setItem('session', 'true')
    }
  }, [data])

  return (
    <>
      <Header />
      <Main>
        {loading ? (
          <Loader />
        ) : (
          <>
            <Form form={loginForm} submitBtn={fetchUserLogin} />
            {error !== '' && <AlertMessage error={error} data={data} />}
          </>
        )}
      </Main>
    </>
  )
}

export default Login
