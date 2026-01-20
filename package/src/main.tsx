import './styles/index.css'

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import { MainRoute } from './routes/MainRoute'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <MainRoute />
  </StrictMode>,
)
