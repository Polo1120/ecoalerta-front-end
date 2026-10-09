import { useRef, useState, type ChangeEvent, type FormEvent } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { AuthCard } from '../../components/AuthCard'
import { Button } from '../../components/Button'
import { Input } from '../../components/Input'
import { PasswordToggle } from '../../components/PasswordToggle'
import { isStrongPassword, isValidEmail } from '../../utils/validation'
import type { RegisterErrors, RegisterRequest } from '../../types/auth'
import { registerUser } from '../../utils/auth'

const initialState: RegisterRequest = {
  name: '',
  email: '',
  password: '',
  confirmPassword: '',
}

type Notice = { type: 'success' | 'error'; message: string }

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
  } else if (!isStrongPassword(form.password)) {
    errors.password = 'Usa al menos 8 caracteres e incluye mayúscula, minúscula, número y símbolo.'
  }

  if (!form.confirmPassword) {
    errors.confirmPassword = 'Confirma tu contraseña.'
  } else if (form.confirmPassword !== form.password) {
    errors.confirmPassword = 'Las contraseñas no coinciden.'
  }

  return errors
}

export function Register() {
  const navigate = useNavigate()
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
    if (name === 'password' && !value) setShowPassword(false)
    if (name === 'confirmPassword' && !value) setShowConfirmPassword(false)
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
      const registered = registerUser({
        name: form.name.trim(),
        email: form.email.trim(),
        password: form.password,
      })
      if (registered) {
        setForm(initialState)
        setErrors({})
        setShowPassword(false)
        setShowConfirmPassword(false)
        setNotice({ type: 'success', message: 'Cuenta creada correctamente. Redirigiendo al inicio de sesión…' })
        window.setTimeout(() => navigate('/login', { replace: true }), 1500)
        return
      }

      setNotice({ type: 'error', message: 'Ya existe una cuenta con ese correo electrónico.' })
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
          endAdornment={form.password ? (
            <PasswordToggle
              visible={showPassword}
              onToggle={() => setShowPassword((value) => !value)}
            />
          ) : undefined}
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
          endAdornment={form.confirmPassword ? (
            <PasswordToggle
              visible={showConfirmPassword}
              onToggle={() => setShowConfirmPassword((value) => !value)}
            />
          ) : undefined}
          value={form.confirmPassword}
          onChange={handleChange}
          error={errors.confirmPassword}
        />

        {notice && (
          <p className={`auth-notice auth-notice-${notice.type}`} role={notice.type === 'error' ? 'alert' : 'status'}>
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
