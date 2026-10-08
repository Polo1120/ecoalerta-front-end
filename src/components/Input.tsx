import type { InputHTMLAttributes, ReactNode, Ref } from 'react'

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string
  error?: string
  /** Icono decorativo mostrado dentro del campo, a la izquierda. */
  icon?: ReactNode
  /** Contenido interactivo a la derecha (ej. botón de mostrar contraseña). */
  endAdornment?: ReactNode
  ref?: Ref<HTMLInputElement>
}

export function Input({
  label,
  error,
  icon,
  endAdornment,
  id,
  className = '',
  ref,
  ...rest
}: InputProps) {
  const inputId = id ?? rest.name
  const errorId = error ? `${inputId}-error` : undefined

  const inputClasses = [
    'input',
    icon ? 'input-has-icon' : '',
    endAdornment ? 'input-has-adornment' : '',
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <div className={`field ${error ? 'field-invalid' : ''} ${className}`.trim()}>
      <label htmlFor={inputId}>{label}</label>
      <div className="input-wrap">
        {icon && (
          <span className="input-icon" aria-hidden="true">
            {icon}
          </span>
        )}
        <input
          id={inputId}
          ref={ref}
          className={inputClasses}
          aria-invalid={error ? true : undefined}
          aria-describedby={errorId}
          {...rest}
        />
        {endAdornment && <span className="input-adornment">{endAdornment}</span>}
      </div>
      {error && (
        <span id={errorId} className="field-error" role="alert">
          {error}
        </span>
      )}
    </div>
  )
}
