import AlertMessage from '../../components/AlertMessage/AlertMessage'
import Form from '../../components/Form/Form'
import Header from '../../components/Header/Header'
import Loader from '../../components/Loader/Loader'
import Main from '../../components/Main/Main'
import { useLoginMutation } from '../../store/reducers/authApi/authApi'

function Login() {
  const loginForm = {
    formName: 'login',
    inputsList: [
      { name: 'login', label: 'Логин', value: '' },
      { name: 'password', label: 'Пароль', value: '' },
    ],
    submitName: 'Войти',
  }

  const [checkUser, { isError, error, data, isLoading }] = useLoginMutation()

  return (
    <>
      <Header />
      <Main>
        {isLoading ? (
          <Loader />
        ) : (
          <>
            <div>Login</div>
            <Form form={loginForm} submit={checkUser} />
            {isError ? <AlertMessage error={error} data={data} /> : null}
          </>
        )}
      </Main>
    </>
  )
}

export default Login
