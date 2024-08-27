import React from 'react'
import ReactDOM from 'react-dom/client'
import { PizzeriaApp } from './PizzeriaApp'
import './index.css'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <PizzeriaApp />
    </BrowserRouter>
  </React.StrictMode>,
)
