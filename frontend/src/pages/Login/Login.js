import Form from '../../components/Form/Form'
import Header from '../../components/Header/Header'
import Main from '../../components/Main/Main'

function Login() {
  const loginForm = {
    formName: 'login',
    inputsList: [
      { name: 'login', label: 'Логин', value: '' },
      { name: 'password', label: 'Пароль', value: '' },
    ],
    submitName: 'Войти',
  }

  return (
    <>
      <Header />
      <Main>
        <div>Login</div>
        <Form form={loginForm} />
      </Main>
    </>
  )
}

export default Login
