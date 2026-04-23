import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router'
import App from './app/App'
import ArtikelPage from './app/pages/ArtikelPage'
import KontakPage from './app/pages/KontakPage'
import LayananPage from './app/pages/LayananPage'
import TentangPage from './app/pages/TentangPage'
import './styles/index.css'

const router = createBrowserRouter([
  { path: '/', element: <App /> },
  { path: '/layanan', element: <LayananPage /> },
  { path: '/tentang', element: <TentangPage /> },
  { path: '/artikel', element: <ArtikelPage /> },
  { path: '/kontak', element: <KontakPage /> },
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
