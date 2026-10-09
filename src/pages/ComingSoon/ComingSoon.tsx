import { useNavigate } from 'react-router-dom'
import { Button } from '../../components/Button'
import { BottomNav } from '../../components/BottomNav'
import { Header } from '../../components/Header'
import { signOut } from '../../utils/auth'
import './ComingSoon.css'

interface ComingSoonProps {
  title: string
}

export function ComingSoon({ title }: ComingSoonProps) {
  const navigate = useNavigate()

  const handleSignOut = () => {
    signOut()
    navigate('/login', { replace: true })
  }

  return (
    <div className="coming-soon-page">
      <Header />
      <main className="home-content">
        <section className="greeting-section">
          <h2 className="greeting-title">{title}</h2>
          <p className="greeting-subtitle">Esta sección estará disponible próximamente.</p>
          {title === 'Perfil' && (
            <section className="profile-session-card" aria-label="Sesión">
              <div>
                <h3>Tu cuenta</h3>
                <p>Cierra tu sesión de forma segura en este dispositivo.</p>
              </div>
              <Button variant="outline" onClick={handleSignOut}>
                Cerrar sesión
              </Button>
            </section>
          )}
        </section>
      </main>
      <BottomNav />
    </div>
  )
}
