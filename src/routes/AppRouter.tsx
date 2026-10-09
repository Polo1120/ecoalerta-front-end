import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { Login } from '../pages/Login/Login'
import { Register } from '../pages/Register/Register'
import { Home } from '../pages/Home/Home'
import { RequireAuth } from './RequireAuth'
import { ComingSoon } from '../pages/ComingSoon/ComingSoon'
import { isAuthenticated } from '../utils/auth'

export function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to={isAuthenticated() ? '/home' : '/login'} replace />} />
        <Route path="/login" element={isAuthenticated() ? <Navigate to="/home" replace /> : <Login />} />
        <Route path="/register" element={isAuthenticated() ? <Navigate to="/home" replace /> : <Register />} />
        <Route element={<RequireAuth />}>
          <Route path="/home" element={<Home />} />
          <Route path="/mis-reportes" element={<ComingSoon title="Mis reportes" />} />
          <Route path="/crear" element={<ComingSoon title="Crear reporte" />} />
          <Route path="/perfil" element={<ComingSoon title="Perfil" />} />
          <Route path="/reportes" element={<ComingSoon title="Reportes" />} />
        </Route>
        <Route path="*" element={<Navigate to={isAuthenticated() ? '/home' : '/login'} replace />} />
      </Routes>
    </BrowserRouter>
  )
}
