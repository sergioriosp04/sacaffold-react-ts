import axios from 'axios'
import { getAuthToken } from './localStorageService'

export const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: {
    'Content-Type': 'application/json',
    Authorization: getAuthToken()
  }
})
