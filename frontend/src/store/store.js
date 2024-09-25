import { configureStore } from '@reduxjs/toolkit'
import activeScreenReducer from './reducers/activeScreen/activeScreenSlice'
import showAlertReducer from './reducers/showAlert/showAlert'
import { authApi } from './reducers/authApi/authApi'

export default configureStore({
  reducer: {
    activeScreen: activeScreenReducer,
    alert: showAlertReducer,
    [authApi.reducerPath]: authApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(authApi.middleware),
})
