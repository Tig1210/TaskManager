import { Route, Routes } from 'react-router-dom'
import Login from '../pages/Login/Login'
import Registration from '../pages/Registration/Registration'
import Home from '../pages/Home/Home'

// export const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <Home />,
//   },
//   {
//     path: '/login',
//     element: <Login />,
//   },
//   {
//     path: '/registration',
//     element: <Registration />,
//   },
// ])

const RenderRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/registration" element={<Registration />} />
    </Routes>
  )
}

export default RenderRouter
