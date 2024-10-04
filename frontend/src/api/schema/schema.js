const serverUrl = 'http://localhost:5000/api'

export const fetchGetSchemaById = async (id, setIsLoading, setData) => {
  setIsLoading(true)
  try {
    const res = await fetch(`${serverUrl}/getSchemaById/${id}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
    })

    console.log(res)
    const result = await res.json()
    if (res.status === 400) {
      throw new Error(result.message)
    } else {
      setData(result)
      //   return result
    }
  } catch (error) {
    console.log(error)
    return error
  } finally {
    setIsLoading(false)
  }
}
