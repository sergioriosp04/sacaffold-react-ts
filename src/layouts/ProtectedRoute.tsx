import { Navigate } from 'react-router-dom'
import { useAuth } from '../hooks/useAuth'

export const ProtectedRoute = (): JSX.Element => {
  const { currentUser, loadingAuth } = useAuth()

  if (loadingAuth) {
    return (
      <div>
        Cargando ...
      </div>
    )
  }

  return (
    <>
      {currentUser.id ? 'Autenticado' : <Navigate to='/' /> }
    </>
  )
}
