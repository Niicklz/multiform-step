import React from 'react'
import ReactDOM from 'react-dom/client'
import { MultiFormApp } from './MultiFormApp'
import "./sanitize.css"
import "./reset-min.css"





ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <MultiFormApp/>
  </React.StrictMode>,
)
