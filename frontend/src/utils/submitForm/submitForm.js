import { fetchRegistration } from '../../api'
import { editFormData } from '../editFormData/editFormData'

export const submitForm = (formName, formData) => {
  const currentSubmit = {
    login: loginSubmit,
    registration: registrationSubmit,
  }

  function loginSubmit() {
    console.log('login')
  }

  function registrationSubmit() {
    console.log('registration', formData)

    fetchRegistration(editFormData(formData))
  }

  return currentSubmit[formName]()
}
