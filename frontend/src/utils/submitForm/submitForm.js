export const submitForm = (formName) => {
  const currentSubmit = {
    login: loginSubmit,
    registration: registrationSubmit,
  }

  function loginSubmit() {
    console.log('login')
  }

  function registrationSubmit() {
    console.log('registration')
  }

  return currentSubmit[formName]()
}
