import { createContext, useState } from 'react'
import { type ChildrenProvider, type UserStructureAuthContext } from '../types/authTypes'

const initialUser = {
  id: null,
  email: '',
  access_token: ''
}

export const AuthContext = createContext<UserStructureAuthContext>({ currentUser: initialUser })

export const AuthProvider = ({ children }: ChildrenProvider): JSX.Element => {
  const [currentUser, setCurrentUser] = useState(initialUser)

  return (
    <AuthContext.Provider value={{ currentUser, setCurrentUser }}>
      {children}
    </AuthContext.Provider>
  )
}
