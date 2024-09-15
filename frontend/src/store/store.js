import { configureStore } from '@reduxjs/toolkit'
import activeScreenReducer from './reducers/activeScreen/activeScreenSlice'

export default configureStore({
  reducer: {
    activeScreen: activeScreenReducer,
  },
})
