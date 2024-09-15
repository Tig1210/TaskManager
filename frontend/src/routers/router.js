import { createBrowserRouter } from 'react-router-dom'
import Welcome from '../pages/Welcome/Welcome'
import Login from '../pages/Login/Login'
import Registration from '../pages/Registration/Registration'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Welcome />,
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/registration',
    element: <Registration />,
  },
])
