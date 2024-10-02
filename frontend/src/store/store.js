import { configureStore } from '@reduxjs/toolkit'

import userInfoReducer from './reducers/userInfo/userInfo'
import userSessionReducer from './reducers/userSession/userSession'
import showAlertReducer from './reducers/showAlert/showAlert'

export default configureStore({
  reducer: {
    userInfo: userInfoReducer,
    userSession: userSessionReducer,
    showAlert: showAlertReducer,
  },
})
