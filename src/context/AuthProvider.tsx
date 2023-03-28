import { createContext, useState, useEffect } from 'react'
import { type ChildrenProvider, type UserStructureAuthContext } from '../types/authTypes'
import { api } from '../services/axiosService'
import jwt_decode from 'jwt-decode'
import { getToken } from '../services/localStorageService'

const initialUser = {
  id: null,
  email: '',
  access_token: ''
}

interface DecodedToken {
  sub: number
}

export const AuthContext = createContext<UserStructureAuthContext>({ currentUser: initialUser })

export const AuthProvider = ({ children }: ChildrenProvider): JSX.Element => {
  const [currentUser, setCurrentUser] = useState(initialUser)
  const [loadingAuth, setLoadingAuth] = useState(true)

  /**
   * validate if the user is authenticated
   */
  useEffect(() => {
    const getUserData = async (): Promise<void> => {
      const token = getToken()
      if (!token) {
        setLoadingAuth(false)
        return
      }

      const decoded: DecodedToken = jwt_decode(token)
      try {
        const { data } = await api.get(`/users/${decoded.sub}`)
        setCurrentUser({ id: data.id, email: data.email, access_token: token })
      } catch (err) {
      }
      setLoadingAuth(false)
    }

    void getUserData()
  }, [])

  return (
    <AuthContext.Provider value={{ currentUser, setCurrentUser, loadingAuth }}>
      {children}
    </AuthContext.Provider>
  )
}
