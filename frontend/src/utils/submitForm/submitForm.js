export const submitForm = (formName) => {
  console.log(formName)
  const currentSubmit = {
    login: loginSubmit(),
    registration: registrationSubmit(),
  }

  function loginSubmit() {
    console.log('login')
  }

  function registrationSubmit() {
    console.log('registration')
  }

  return currentSubmit[formName]
}
