const serverUrl = 'http://localhost:5000/api'

export const fetchLogin = async (data) => {
  try {
    const { name, login, password } = data
    const user = {
      name: name,
      login: login,
      password: password,
    }
    const res = await fetch(`${serverUrl}/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify(user),
    })
    const result = await res
    console.log(result)
  } catch (error) {
    console.log(error)
  }
}

export const fetchRegistration = async (data) => {
  try {
    const { name, mail, password, login } = data
    const user = {
      name: name,
      login: login,
      password: password,
      mail: mail,
    }
    const res = await fetch(`${serverUrl}/registration`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify(user),
    })

    const result = await res.json()

    if (res.status === 400) {
      throw new Error(result.message)
    }
  } catch (error) {
    console.log(error)
  }
}
