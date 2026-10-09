import { Link, useLocation } from 'react-router-dom'
import { Icon } from './Icon'
import './BottomNav.css'

export function BottomNav() {
  const location = useLocation()

  return (
    <nav className="global-bottom-nav">
      <Link 
        to="/home" 
        className={`nav-item ${location.pathname === '/home' ? 'active' : ''}`}
      >
        <Icon name="home" />
        <span>Inicio</span>
      </Link>
      
      <Link 
        to="/mis-reportes" 
        className={`nav-item ${location.pathname === '/mis-reportes' ? 'active' : ''}`}
      >
        <Icon name="report" />
        <span>Mis reportes</span>
      </Link>
      
      <Link 
        to="/crear" 
        className={`nav-item ${location.pathname === '/crear' ? 'active' : ''}`}
      >
        <Icon name="Icon" />
        <span>Crear reporte</span>
      </Link>
      
      <Link 
        to="/perfil" 
        className={`nav-item ${location.pathname === '/perfil' ? 'active' : ''}`}
      >
        <Icon name="user" />
        <span>Perfil</span>
      </Link>
    </nav>
  )
}