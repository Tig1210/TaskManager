import { createSlice } from '@reduxjs/toolkit'

const userSessionSlice = createSlice({
  name: 'userInfo',
  initialState: {
    session: false,
    data: {},
  },
  reducers: {
    updateSession: (state, action) => {
      console.log(action)
      state.session = true
      state.data = action.payload
    },

    resetSession: (state) => {
      state.session = false
      state.data = {}
    },
  },
})

export const { updateSession, resetSession } = userSessionSlice.actions

export default userSessionSlice.reducer
