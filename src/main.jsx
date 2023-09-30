import React from 'react'
import ReactDOM from 'react-dom/client'
import { BuscadorPeliculas } from './buscadorPeliculas.jsx'
import './style/buscador.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BuscadorPeliculas/>
  </React.StrictMode>,
)
