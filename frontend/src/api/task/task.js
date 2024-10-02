const serverUrl = 'http://localhost:5000/api'

export const fetchAddTask = async () => {
  try {
    const res = await fetch(`${serverUrl}/addTask`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
    })
    const result = await res.json()
    console.log(result)
    if (res.status === 400) {
      throw new Error(result.message)
    } else {
      return result
    }
  } catch (error) {
    console.log(error)
    return error
  }
}

export const fetchGetTasksBySchemeId = async () => {
  try {
    const res = await fetch(`${serverUrl}/getTasksBySchemeId/${1}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
    })
    const result = await res.json()
    console.log(result)
    if (res.status === 400) {
      throw new Error(result.message)
    } else {
      return result
    }
  } catch (error) {
    console.log(error)
    return error
  }
}
