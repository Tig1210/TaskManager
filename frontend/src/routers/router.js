import { createBrowserRouter } from 'react-router-dom'
import Login from '../pages/Login/Login'
import Registration from '../pages/Registration/Registration'
import Home from '../pages/Home/Home'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
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
