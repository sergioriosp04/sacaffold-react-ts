import axios from 'axios'
import { getAuthToken } from './localStorageService'

export const api = axios.create({
  baseURL: 'http://localhost:3001',
  headers: {
    'Content-Type': 'application/json',
    Authorization: getAuthToken()
  }
})
