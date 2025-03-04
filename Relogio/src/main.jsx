import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import './Login.css'

import LoginPrincipal from './LoginPrincipal.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <LoginPrincipal />
  </StrictMode>,
)
