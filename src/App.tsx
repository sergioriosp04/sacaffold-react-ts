import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AuthLayout from './layouts/AuthLayout'
import Login from './pages/auth/Login'
import Register from './pages/auth/Register'

function App (): JSX.Element {
  return (
    <div className='font-primary'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<AuthLayout />}>
            <Route index element={<Login />} />
            <Route path='register' element={<Register />} />
          </Route>

          <Route path='/'>

          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
