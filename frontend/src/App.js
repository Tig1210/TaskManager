import './App.scss'
import { RouterProvider } from 'react-router-dom'
import { router } from './routers/router'

function App() {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        height: '100vh',
        paddingLeft: '10px',
        paddingRight: '10px',
      }}
    >
      <RouterProvider router={router} />
    </div>
  )
}

export default App
