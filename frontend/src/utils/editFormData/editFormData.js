export const editFormData = (arr) => {
  const obj = {}

  arr.map((el) => {
    obj[el.name] = el.value
  })

  return obj
}
