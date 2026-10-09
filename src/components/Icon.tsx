export type IconName =
  | 'arrows-down'
  | 'arrows-left'
  | 'arrows-ringh'
  | 'camara'
  | 'camara2'
  | 'map'
  | 'home'
  | 'Icon'
  | 'logo'
  | 'menu'
  | 'ojo-login'
  | 'ojo-login-most'
  | 'report'
  | 'ubicacion'
  | 'user'
  | 'user-nav'

export interface IconProps {
  name: IconName
  className?: string
}

export function Icon({ name, className = '' }: IconProps) {
  return <span className={`icon-${name} ${className}`.trim()} aria-hidden="true" />
}
