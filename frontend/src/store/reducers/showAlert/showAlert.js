import { createSlice } from '@reduxjs/toolkit'

export const showAlertSlice = createSlice({
  name: 'alert',
  initialState: {
    status: '',
    message: '',
  },
  reducers: {
    setAlert: (state, action) => {
      state.status = action.payload
      state.message = action.payload
    },
    reset: (state) => {
      state.status = ''
      state.message = ''
    },
  },
})

export const { setAlert, reset } = showAlertSlice.actions

export default showAlertSlice.reducer
