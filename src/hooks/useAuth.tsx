import { useContext } from 'react'
import { AuthContext } from '../context/AuthProvider'
import { type UserStructureAuthContext } from '../types/authTypes'

export const useAuth = (): UserStructureAuthContext | null => {
  return useContext(AuthContext)
}
