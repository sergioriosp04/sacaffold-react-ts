interface User {
  id: number | null
  email: string
  access_token: string
}

export interface UserStructureAuthContext {
  currentUser: User
  setCurrentUser: React.SetStateAction<any>
}
