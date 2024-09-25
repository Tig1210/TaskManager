import AlertMessage from '../../components/AlertMessage/AlertMessage'
import Form from '../../components/Form/Form'
import Header from '../../components/Header/Header'
import Main from '../../components/Main/Main'
import { useRegistrationMutation } from '../../store/reducers/authApi/authApi'

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

  const [addUser, { isSuccess, isError, error, data }] =
    useRegistrationMutation()

  // console.log('RESULt---------', result)
  return (
    <>
      <Header />
      <Main>
        <div>Registartion</div>
        <Form form={registrationForm} submit={addUser} />
        {isError || isSuccess ? (
          <AlertMessage error={error} data={data} />
        ) : null}
      </Main>
    </>
  )
}

export default Registration
