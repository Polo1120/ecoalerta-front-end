import { Link, useLocation } from 'react-router-dom'
import { Icon } from './Icon'
import './Header.css'

export function Header() {
  const location = useLocation()

  return (
    <header className="global-header">
      {/* --- Vista Móvil --- */}
      <div className="header-mobile mobile-only">
        <button className="icon-btn" aria-label="Menú">
          <Icon name="menu" />
        </button>
        <div className="header-logo-container">
          <span className="logo-icon-bg">
            <Icon name="logo" />
          </span>
          <h1 className="logo-text">EcoAlerta</h1>
        </div>
        <button className="icon-btn" aria-label="Perfil">
          <Icon name="user-nav" />
        </button>
      </div>

      {/* --- Vista Escritorio --- */}
      <div className="header-desktop desktop-only">
        <div className="header-left">
          <div className="header-logo-container">
            <span className="logo-icon-bg">
              <Icon name="logo" />
            </span>
            <h1 className="logo-text">EcoAlerta</h1>
          </div>
          <nav className="desktop-nav">
            <Link 
              to="/home" 
              className={`desk-nav-item ${location.pathname === '/home' ? 'active' : ''}`}
            >
              Inicio
            </Link>
            <Link 
              to="/mis-reportes" 
              className={`desk-nav-item ${location.pathname === '/mis-reportes' ? 'active' : ''}`}
            >
              Mis reportes
            </Link>
          </nav>
        </div>
        <button className="icon-btn profile-btn" aria-label="Perfil">
          <Icon name="user-nav" />
        </button>
      </div>
    </header>
  )
}
