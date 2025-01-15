import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { Helmet } from 'react-helmet'

createRoot(document.getElementById('root')!).render(
  <div>
    <Helmet>
      <meta property="og:title" content="Your page title" />
      <meta property="og:description" content="Your page description" />
      <meta property="og:image" content="https://asset.cloudinary.com/dkxotttzd/9c8c710f30f5e8f6819cc35902cf8c0d" />
    </Helmet>
    <StrictMode>
      <App />
    </StrictMode>,
  </div>
)
