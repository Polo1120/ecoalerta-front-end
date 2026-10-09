const AUTH_SESSION_KEY = 'ecoalerta-authenticated'
const REGISTERED_USERS_KEY = 'ecoalerta-registered-users'

export const DEMO_USER = {
  email: 'demo@ecoalerta.com',
  password: 'EcoAlerta123!',
}

type StoredUser = { name: string; email: string; password: string }

function getRegisteredUsers(): StoredUser[] {
  const savedUsers = localStorage.getItem(REGISTERED_USERS_KEY)
  if (!savedUsers) return []

  try {
    const parsedUsers: unknown = JSON.parse(savedUsers)
    return Array.isArray(parsedUsers) ? parsedUsers as StoredUser[] : []
  } catch {
    return []
  }
}

export function registerUser(user: StoredUser): boolean {
  const email = user.email.trim().toLowerCase()
  if (email === DEMO_USER.email || getRegisteredUsers().some((saved) => saved.email.toLowerCase() === email)) {
    return false
  }

  localStorage.setItem(REGISTERED_USERS_KEY, JSON.stringify([
    ...getRegisteredUsers(),
    { ...user, email },
  ]))
  return true
}

export function isValidCredentials(email: string, password: string): boolean {
  const normalizedEmail = email.trim().toLowerCase()
  return (
    (normalizedEmail === DEMO_USER.email && password === DEMO_USER.password) ||
    getRegisteredUsers().some(
      (user) => user.email.toLowerCase() === normalizedEmail && user.password === password,
    )
  )
}

export function isAuthenticated(): boolean {
  return sessionStorage.getItem(AUTH_SESSION_KEY) === 'true'
}

export function signIn(): void {
  sessionStorage.setItem(AUTH_SESSION_KEY, 'true')
}

export function signOut(): void {
  sessionStorage.removeItem(AUTH_SESSION_KEY)
}
