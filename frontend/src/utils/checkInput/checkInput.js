export const checkInput = (value, inputName) => {
  const currentInput = {
    name: checkName,
    mail: checkMail,
    login: checkLogin,
    password: checkPassword,
  }

  function checkName() {
    if (value.length < 3) {
      return 'Имя не может быть меньше 3 символов'
    } else {
      return ''
    }
  }

  function checkMail() {
    if (!value.includes('@')) {
      return 'Почта не может быть без @'
    } else {
      return ''
    }
  }

  function checkLogin() {
    if (value.length < 6) {
      return 'Логин не может быть меньше 6 символов'
    } else {
      return ''
    }
  }

  function checkPassword() {
    if (value.length < 8) {
      return 'Пароль не может быть меньше 8 символов'
    } else {
      return ''
    }
  }

  return currentInput[inputName]()
}
