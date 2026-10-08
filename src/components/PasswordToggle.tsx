import { Icon } from './Icon'

export interface PasswordToggleProps {
  visible: boolean
  onToggle: () => void
}

/** Botón accesible para mostrar u ocultar una contraseña (iconos IcoMoon). */
export function PasswordToggle({ visible, onToggle }: PasswordToggleProps) {
  return (
    <button
      type="button"
      className="password-toggle"
      onClick={onToggle}
      aria-label={visible ? 'Ocultar contraseña' : 'Mostrar contraseña'}
      aria-pressed={visible}
    >
      <Icon name={visible ? 'ojo-login-most' : 'ojo-login'} />
    </button>
  )
}
