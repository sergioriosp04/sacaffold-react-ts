import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AuthLayout from './layouts/AuthLayout'
import Login from './pages/auth/Login'
import Register from './pages/auth/Register'
import ResetPassword from './pages/auth/ResetPassword'
import { AuthProvider } from './context/AuthProvider'

function App (): JSX.Element {
  return (
    <div className='font-primary'>
      <BrowserRouter>
        <AuthProvider>
          <Routes>
            <Route path='/' element={<AuthLayout />}>
              <Route index element={<Login />} />
              <Route path='register' element={<Register />} />
              <Route path='reset-password' element={<ResetPassword />} />
            </Route>

            <Route path='/'>

            </Route>
          </Routes>
        </ AuthProvider>
      </BrowserRouter>
    </div>
  )
}

export default App
