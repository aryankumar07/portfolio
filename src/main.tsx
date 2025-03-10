import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import router from './routes/index.tsx'
import { RouterProvider } from 'react-router-dom'

createRoot(document.getElementById('root')!).render(
  <div>
    <StrictMode>
      <RouterProvider router={router} />
    </StrictMode>,
  </div>
)
