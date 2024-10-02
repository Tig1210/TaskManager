import './App.scss'
import { BrowserRouter } from 'react-router-dom'
import RenderRouter from './routers/router'
import Header from './components/Header/Header'
import Main from './components/Main/Main'

function App() {
  return (
    <BrowserRouter>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          height: '100vh',
          paddingLeft: '10px',
          paddingRight: '10px',
        }}
      >
        <Header />
        <Main>
          {/* <RouterProvider router={router} /> */}
          <RenderRouter />
        </Main>
      </div>
    </BrowserRouter>
  )
}

export default App
