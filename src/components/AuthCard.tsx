import type { ReactNode } from 'react'
import { Icon } from './Icon'
import './AuthCard.css'

export interface AuthCardProps {
  titleId: string
  title: string
  subtitle: string
  children: ReactNode
  footer?: ReactNode
}


export function AuthCard({ titleId, title, subtitle, children, footer }: AuthCardProps) {
  return (
    <main className="auth">
      <section className="auth-card" aria-labelledby={titleId}>
        <header className="auth-header">
          <span className="auth-logo">
            <Icon name="logo" />
          </span>
          <h1 id={titleId} className="auth-title">
            {title}
          </h1>
          <p className="auth-subtitle">{subtitle}</p>
        </header>

        {children}

        {footer && <p className="auth-footer">{footer}</p>}
      </section>
    </main>
  )
}
