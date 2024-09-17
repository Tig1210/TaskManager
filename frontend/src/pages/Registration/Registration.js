import Form from '../../components/Form/Form'
import Header from '../../components/Header/Header'
import Main from '../../components/Main/Main'

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

  return (
    <>
      <Header />
      <Main>
        <div>Registartion</div>
        <Form form={registrationForm} />
      </Main>
    </>
  )
}

export default Registration
