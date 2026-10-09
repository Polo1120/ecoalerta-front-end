import { Icon } from './Icon'
import './Footer.css'

export function Footer() {
  return (
    <footer className="global-footer">
      <div className="footer-content">
        <div className="footer-brand">
          <span className="logo-icon-bg">
            <Icon name="logo" />
          </span>
          <span className="footer-brand-name">EcoAlerta</span>
          <span className="footer-brand-desc">Plataforma de Monitoreo y Denuncia Ambiental</span>
        </div>
        <div className="footer-copy">
          © 2026 EcoAlerta. Participación ciudadana para un entorno sustentable.
        </div>
      </div>
    </footer>
  )
}