/*
 * ==========================================
 * PROPIEDAD INTELECTUAL DE TOMÁS
 * ==========================================
 * Este código es de mi autoría y está protegido por derechos de autor.
 * Queda estrictamente prohibida su copia, distribución, reproducción
 * o modificación sin mi consentimiento explícito. Todos los derechos reservados.
 * ==========================================
 */
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

console.log(
  "%c⚠️ ALERTA DE SISTEMA: PROPIEDAD INTELECTUAL DE TOMÁS ⚠️\n%cEste código es de mi autoría y está protegido por derechos de autor. Queda prohibida su copia o distribución.\nSi estás viendo esto, ¡espero que disfrutes explorando la matrix!",
  "color: #bc13fe; font-size: 20px; font-weight: bold; font-family: monospace; text-shadow: 0 0 10px #bc13fe;",
  "color: #39ff14; font-size: 14px; font-family: monospace; padding-top: 10px;"
);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
