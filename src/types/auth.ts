export interface User {
  id: string
  name: string
  email: string
}

export interface LoginRequest {
  email: string
  password: string
}

export type LoginField = keyof LoginRequest
export type LoginErrors = Partial<Record<LoginField, string>>

export interface RegisterRequest {
  name: string
  email: string
  password: string
  confirmPassword: string
}

export type RegisterField = keyof RegisterRequest
export type RegisterErrors = Partial<Record<RegisterField, string>>

export interface AuthResponse {
  user: User
  token: string
}
