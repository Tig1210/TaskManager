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

// this is for dispatch
export const { setActiveScreen } = activeScreenSlice.actions

// this is for configureStore
export default activeScreenSlice.reducer
