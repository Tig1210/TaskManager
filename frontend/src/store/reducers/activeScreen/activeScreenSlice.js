import { createSlice } from '@reduxjs/toolkit'

export const activeScreenSlice = createSlice({
  name: 'activeScreen',
  initialState: {
    path: null,
  },
  reducers: {
    setActiveScreen: (state, action) => {
      state.path = action.payload
    },
  },
})

export const { setActiveScreen } = activeScreenSlice.actions

export default activeScreenSlice.reducer
