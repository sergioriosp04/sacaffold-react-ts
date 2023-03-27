import { createContext, useState } from 'react'
import { type UserStructureAuthContext } from '../types/authTypes'

export const AuthContext = createContext<UserStructureAuthContext | null>(null)

interface Children {
  children: JSX.Element
}

export const AuthProvider = ({ children }: Children): JSX.Element => {
  const [currentUser, setCurrentUser] = useState({
    id: null,
    email: '',
    access_token: ''
  })

  return (
    <AuthContext.Provider value={{ currentUser, setCurrentUser }}>
      {children}
    </AuthContext.Provider>
  )
}
