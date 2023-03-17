export const getAuthToken = (): string => {
  const token = localStorage.getItem('token')
  if (token != null) {
    return `Bearer ${token}`
  }
  return ''
}

export const setAuthToken = (token: string): void => {
  localStorage.setItem('token', token)
}
