import { createSlice } from '@reduxjs/toolkit'

const showAlertSlice = createSlice({
  name: 'showAlert',
  initialState: {
    text: '',
    error: false,
  },
  reducers: {
    showText: (state, action) => {
      console.log(action.payload)
      state.text = action.payload.text
      if (action.payload.error === 'Error') {
        state.error = true
      } else {
        state.error = false
      }
    },
    resetShowAlert: (state) => {
      state.text = ''
      state.error = false
    },
  },
})

export const { showText, resetShowAlert } = showAlertSlice.actions

export default showAlertSlice.reducer
