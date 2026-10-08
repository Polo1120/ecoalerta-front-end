import { useRef, useState, type ChangeEvent, type FormEvent } from 'react'
import { Link } from 'react-router-dom'
import { AuthCard } from '../../components/AuthCard'
import { Button } from '../../components/Button'
import { Input } from '../../components/Input'
import { PasswordToggle } from '../../components/PasswordToggle'
import { isValidEmail, MIN_PASSWORD_LENGTH } from '../../utils/validation'
import type { RegisterErrors, RegisterRequest } from '../../types/auth'

const initialState: RegisterRequest = {
  name: '',
  email: '',
  password: '',
  confirmPassword: '',
}

type Notice = { type: 'success'; message: string }

function validate(form: RegisterRequest): RegisterErrors {
  const errors: RegisterErrors = {}

  if (!form.name.trim()) {
    errors.name = 'Ingresa tu nombre.'
  }

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

  if (!form.confirmPassword) {
    errors.confirmPassword = 'Confirma tu contraseña.'
  } else if (form.confirmPassword !== form.password) {
    errors.confirmPassword = 'Las contraseñas no coinciden.'
  }

  return errors
}

export function Register() {
  const [form, setForm] = useState<RegisterRequest>(initialState)
  const [errors, setErrors] = useState<RegisterErrors>({})
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [loading, setLoading] = useState(false)
  const [notice, setNotice] = useState<Notice | null>(null)

  const nameRef = useRef<HTMLInputElement>(null)
  const emailRef = useRef<HTMLInputElement>(null)
  const passwordRef = useRef<HTMLInputElement>(null)
  const confirmPasswordRef = useRef<HTMLInputElement>(null)

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

    if (nextErrors.name) {
      nameRef.current?.focus()
      return
    }
    if (nextErrors.email) {
      emailRef.current?.focus()
      return
    }
    if (nextErrors.password) {
      passwordRef.current?.focus()
      return
    }
    if (nextErrors.confirmPassword) {
      confirmPasswordRef.current?.focus()
      return
    }

    // Registro únicamente local: todavía no hay conexión con el backend.
    setLoading(true)
    window.setTimeout(() => {
      setLoading(false)
      setNotice({
        type: 'success',
        message: 'Cuenta creada correctamente. Registro simulado de forma local.',
      })
    }, 600)
  }

  return (
    <AuthCard
      titleId="register-title"
      title="EcoAlerta"
      subtitle="Crear una cuenta"
      footer={
        <>
          ¿Ya tienes una cuenta? <Link to="/login">Inicia sesión</Link>
        </>
      }
    >
      <p className='auth-subtitle-register'>
       Regístrate para comenzar.
      </p>
      <form className="auth-form" onSubmit={handleSubmit} noValidate>
        <Input
          ref={nameRef}
          label="Nombre completo"
          name="name"
          type="text"
          autoComplete="name"
          placeholder="Tu nombre"
          value={form.name}
          onChange={handleChange}
          error={errors.name}
        />

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
          autoComplete="new-password"
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

        <Input
          ref={confirmPasswordRef}
          label="Confirmar contraseña"
          name="confirmPassword"
          type={showConfirmPassword ? 'text' : 'password'}
          autoComplete="new-password"
          placeholder="••••••••"
          endAdornment={
            <PasswordToggle
              visible={showConfirmPassword}
              onToggle={() => setShowConfirmPassword((value) => !value)}
            />
          }
          value={form.confirmPassword}
          onChange={handleChange}
          error={errors.confirmPassword}
        />

        {notice && (
          <p className={`auth-notice auth-notice-${notice.type}`} role="status">
            {notice.message}
          </p>
        )}

        <Button type="submit" fullWidth loading={loading}>
          Crear Cuenta
        </Button>
      </form>
    </AuthCard>
  )
}
