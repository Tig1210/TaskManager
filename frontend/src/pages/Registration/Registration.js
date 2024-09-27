// import AlertMessage from '../../components/AlertMessage/AlertMessage'
import { useSelector } from 'react-redux'
import Form from '../../components/Form/Form'
import Header from '../../components/Header/Header'
import Main from '../../components/Main/Main'
import { fetchUserRegistration } from '../../store/reducers/userInfo/userInfo'
import Loader from '../../components/Loader/Loader'
import AlertMessage from '../../components/AlertMessage/AlertMessage'

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

  const registrationData = useSelector((data) => data.userInfo)

  const { data, error, loading } = registrationData

  return (
    <>
      <Header />
      <Main>
        {loading ? (
          <Loader />
        ) : (
          <>
            <Form form={registrationForm} submitBtn={fetchUserRegistration} />
            {(error !== '' || Object.keys(data).length !== 0) && (
              <AlertMessage error={error} data={data} />
            )}
          </>
        )}
      </Main>
    </>
  )
}

export default Registration
