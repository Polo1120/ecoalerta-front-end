import { Link } from 'react-router-dom'
import { Icon } from '../../components/Icon'
import { Header } from '../../components/Header'
import { BottomNav } from '../../components/BottomNav'
import { Footer } from '../../components/Footer'
import { Button } from '../../components/Button'
import './Home.css'

export function Home() {
  return (
    <div className="home-page">
      <Header />

      <main className="home-content">
        <div className="home-grid">
          
          <div className="main-column">
            {/* Saludo */}
            <section className="greeting-section">
              <div className="greeting-text">
                <span className="status-badge desktop-only">
                  <Icon name="ubicacion" /> PANEL DE MONITOREO ACTIVO
                </span>
                <h2 className="greeting-title">Hola, ciudadano</h2>
                {/* En móvil mostramos el subtitulo corto, en desktop el largo */}
                <p className="greeting-subtitle mobile-only">¿Qué quieres reportar hoy?</p>
                <p className="greeting-subtitle desktop-only">
                  ¿Qué quieres reportar hoy? Tu vigilancia comunitaria permite gestionar reclamos y restaurar los espacios públicos con transparencia.
                </p>
              </div>
              
              <div className="greeting-actions desktop-only">
                <Button variant="primary" className="action-btn">
                  <Icon name="camara2" /> Nuevo Reporte
                </Button>
                <Button variant="secondary" className="action-btn-alt">
                  <Icon name="map" /> Explorar Mapa
                </Button>
              </div>
            </section>

            {/* Acciones Rápidas - SÓLO VISIBLES EN MÓVIL */}
            <section className="quick-actions mobile-only">
              <button className="action-card">
                <div className="action-card-content">
                  <div className="action-icon-wrapper bg-secondary-container">
                    <Icon name="camara2" />
                  </div>
                  <div className="action-text">
                    <h3>Nuevo Reporte</h3>
                    <p>Captura y sube evidencia</p>
                  </div>
                </div>
                <Icon name="arrows-down" className="action-arrow chevron-right" />
              </button>

              <button className="action-card">
                <div className="action-card-content">
                  <div className="action-icon-wrapper  bg-primary-container">
                    <Icon name="map" />
                  </div>
                  <div className="action-text">
                    <h3>Mapa de Alertas</h3>
                    <p>Ver incidencias cercanas</p>
                  </div>
                </div>
                <Icon name="arrows-down" className="action-arrow chevron-right" />
              </button>
            </section>

            {/* Reportes Recientes */}
            <section className="recent-reports">
              <div className="section-header">
                <div className="section-title-group">
                  <h2>Reportes Recientes</h2>
                  <span className="count-badge desktop-only">28 activos</span>
                </div>
                <Link to="/reportes" className="view-all">
                  Ver todos <Icon name="arrows-ringh" className="arrow-right-icon desktop-only" />
                </Link>
              </div>

              {/* Filtros - SÓLO VISIBLES EN ESCRITORIO */}
              <div className="filter-tabs desktop-only">
                <button className="filter-tab active">Todos (32)</button>
                <button className="filter-tab">Pendientes (12)</button>
                <button className="filter-tab">En Proceso (9)</button>
                <button className="filter-tab">Resueltos (11)</button>
              </div>

              <div className="report-list">
                
                <article className="report-card">
                  <div className="report-image-wrapper">
                    <img 
                      className="report-image"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuACqSrLKJim0w9FRY_6VE3Uk1hCHXgV_d_dMpUhePWXxgmW6Q33sedIYDmR8Rp_T1kvReqDI6hxvtxle0rXDWvLvDADJiefv9zc6ceTJkbbiZDZxUhHhjpvbpcBqlBssg2AxM_Sev7XagfADOgdg3_62r4P7AJyjf65v0g4_OF4p3JwcwbWU_UW4c4lFT-2AFNiH2aOzXEIoelyirQkWcTQJKikCjhQ0hfWLibO2hn2q0jIpYQa1baN" 
                      alt="Vertedero ilegal" 
                    />
                    {/* Badge sobre la imagen en Desktop */}
                    <span className="report-status badge-pending desktop-only">• Pendiente</span>
                  </div>
                  <div className="report-body">
                    {/* Estructura Móvil del Título/Badge */}
                    <div className="report-title-row mobile-only">
                      <h3 className="report-title">Vertedero ilegal en parque</h3>
                      <span className="badge badge-pending">Pendiente</span>
                    </div>
                    <div className="report-meta desktop-only">
                      <span className="meta-item"><Icon name="ubicacion" /> Parque Central, Sector Norte</span>
                      <span className="meta-item">• <Icon name="report" /> Hace 2 horas</span>
                    </div>
                    {/* Título en Desktop */}
                    <h3 className="report-title desktop-only">Vertedero ilegal en parque</h3>
                    
                    <p className="report-desc">
                      Se ha detectado un depósito no autorizado de escombros y basura en la zona norte del Parque Central.
                    </p>
                    
                    {/* Meta en Móvil */}
                    <div className="report-meta mobile-only">
                      <span className="meta-item">
                        <Icon name="ubicacion" /> Parque Central
                      </span>
                      <span className="meta-item">
                        <Icon name="report" /> Hace 2 horas
                      </span>
                    </div>

                    {/* Footer de la tarjeta en Desktop */}
                    <div className="report-footer desktop-only">
                      <span className="report-id">ID #REP-2024-89</span>
                      <Link to="/reporte/89" className="report-link">Ver detalles <Icon name="arrows-ringh" className="arrow-right-icon" /></Link>
                    </div>
                  </div>
                </article>

                <article className="report-card">
                  <div className="report-image-wrapper">
                    <img 
                      className="report-image"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuDbUDxgmP7_bP2Ph0sPzrK5pTzlJfFu4dfaFGGgAw99TcKCYjnAi7DDHzxjMONQE1cEYRlfmfATsCdI2gI47-QIoUYuOdpb1lWsHEdSCqs24xrZC9GeFu9JduHT-sw0eaJjAIzJXsjAheDsvIQ_rtq5_ZMtamSzmcRPr6p0HkpMqvqzm7tHWP_JVXYOr-cAYsUHh48htW_cV-EwjdLfmNLCbqmqQNOt1TKHOl_dQIah8oH8Uav8exI2" 
                      alt="Contaminación en arroyo" 
                    />
                    <span className="report-status badge-resolved desktop-only">• Resuelto</span>
                  </div>
                  <div className="report-body">
                    <div className="report-title-row mobile-only">
                      <h3 className="report-title">Contaminación en arroyo</h3>
                      <span className="badge badge-resolved">Resuelto</span>
                    </div>
                    <div className="report-meta desktop-only">
                      <span className="meta-item"><Icon name="ubicacion" /> Arroyo Los Pinos</span>
                      <span className="meta-item">• <Icon name="report" /> Ayer</span>
                    </div>
                    <h3 className="report-title desktop-only">Contaminación en arroyo</h3>

                    <p className="report-desc">
                      Desechos plásticos y agua turbia observados en el arroyo Los Pinos, cerca del puente peatonal.
                    </p>
                    
                    <div className="report-meta mobile-only">
                      <span className="meta-item">
                        <Icon name="ubicacion" /> Arroyo Los Pinos
                      </span>
                      <span className="meta-item">
                        <Icon name="report" /> Ayer
                      </span>
                    </div>

                    <div className="report-footer desktop-only">
                      <span className="report-id">ID #REP-2024-88</span>
                      <Link to="/reporte/88" className="report-link">Ver detalles <Icon name="arrows-ringh" className="arrow-right-icon" /></Link>
                    </div>
                  </div>
                </article>
              </div>
            </section>
          </div>

          {/* SÓLO VISIBLE EN ESCRITORIO */}
          <aside className="aside-column desktop-only">
            <div className="incident-card">
              <div className="incident-icon-wrapper">
                <Icon name="camara2" />
              </div>
              <h3 className="incident-title">¿Detectaste un incidente?</h3>
              <p className="incident-desc">
                Sube una fotografía nítida del problema y nuestra plataforma geolocalizará de manera automática el punto exacto para las brigadas de limpieza.
              </p>
              
              <ul className="incident-steps">
                <li><span className="step-num">1</span> Toma 1 a 3 fotos claras con buena iluminación.</li>
                <li><span className="step-num">2</span> Confirma la ubicación en el mapa interactivo.</li>
                <li><span className="step-num">3</span> Recibe notificaciones en tiempo real del progreso.</li>
              </ul>

              <Button variant="primary" fullWidth className="incident-btn">
                + Generar Reporte Ahora
              </Button>
            </div>
          </aside>

        </div>
      </main>

      <Footer />
      <BottomNav />
    </div>
  )
}
