import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { RouterProvider } from 'react-router'
import { Router } from './components/Router.jsx'
import EcomState from './contextState/ecomState.jsx'

createRoot(document.getElementById('root')).render(
  <EcomState>
    <RouterProvider router={Router}/>
  </EcomState>,
)
