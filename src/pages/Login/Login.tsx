import { useRef, useState, type ChangeEvent, type FormEvent } from 'react'
import { Link } from 'react-router-dom'
import { AuthCard } from '../../components/AuthCard'
import { Button } from '../../components/Button'
import { Input } from '../../components/Input'
import { PasswordToggle } from '../../components/PasswordToggle'
import { isValidEmail, MIN_PASSWORD_LENGTH } from '../../utils/validation'
import type { LoginErrors, LoginRequest } from '../../types/auth'

const initialState: LoginRequest = { email: '', password: '' }

type Notice = { type: 'success' | 'info'; message: string }

function validate(form: LoginRequest): LoginErrors {
  const errors: LoginErrors = {}

  if (!form.email.trim()) {
    errors.email = 'Ingresa tu correo electrónico.'
  } else if (!isValidEmail(form.email)) {
    errors.email = 'Ingresa un correo electrónico válido.'
  }

  if (!form.password) {
    errors.password = 'Ingresa tu contraseña.'
  } else if (form.password.length < MIN_PASSWORD_LENGTH) {
    errors.password = `La contraseña debe tener al menos ${MIN_PASSWORD_LENGTH} caracteres.`
  }

  return errors
}

export function Login() {
  const [form, setForm] = useState<LoginRequest>(initialState)
  const [errors, setErrors] = useState<LoginErrors>({})
  const [showPassword, setShowPassword] = useState(false)
  const [loading, setLoading] = useState(false)
  const [notice, setNotice] = useState<Notice | null>(null)

  const emailRef = useRef<HTMLInputElement>(null)
  const passwordRef = useRef<HTMLInputElement>(null)

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target
    setForm((prev) => ({ ...prev, [name]: value }))
    setErrors((prev) => ({ ...prev, [name]: undefined }))
    setNotice(null)
  }

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setNotice(null)

    const nextErrors = validate(form)
    setErrors(nextErrors)

    if (nextErrors.email) {
      emailRef.current?.focus()
      return
    }
    if (nextErrors.password) {
      passwordRef.current?.focus()
      return
    }

    // Validación únicamente local: todavía no hay conexión con el backend.
    setLoading(true)
    window.setTimeout(() => {
      setLoading(false)
      setNotice({
        type: 'success',
        message: 'Credenciales válidas. Validación realizada de forma local.',
      })
    }, 600)
  }

  return (
    <AuthCard
      titleId="login-title"
      title="EcoAlerta"
      subtitle="Iniciar sesión para continuar"
      footer={
        <>
          ¿No tienes una cuenta? <Link to="/register">Regístrate</Link>
        </>
      }
    >
      <form className="auth-form" onSubmit={handleSubmit} noValidate>
        <Input
          ref={emailRef}
          label="Correo electrónico"
          name="email"
          type="email"
          autoComplete="email"
          inputMode="email"
          placeholder="tu@correo.com"
          value={form.email}
          onChange={handleChange}
          error={errors.email}
        />

        <Input
          ref={passwordRef}
          label="Contraseña"
          name="password"
          type={showPassword ? 'text' : 'password'}
          autoComplete="current-password"
          placeholder="••••••••"
          endAdornment={
            <PasswordToggle
              visible={showPassword}
              onToggle={() => setShowPassword((value) => !value)}
            />
          }
          value={form.password}
          onChange={handleChange}
          error={errors.password}
        />

        <div className="auth-row">
          <button
            type="button"
            className="auth-forgot"
            onClick={() =>
              setNotice({
                type: 'info',
                message: 'La recuperación de contraseña estará disponible próximamente.',
              })
            }
          >
            ¿Olvidaste tu contraseña?
          </button>
        </div>

        {notice && (
          <p className={`auth-notice auth-notice-${notice.type}`} role="status">
            {notice.message}
          </p>
        )}

        <Button type="submit" fullWidth loading={loading}>
          Ingresar
        </Button>
      </form>
    </AuthCard>
  )
}
