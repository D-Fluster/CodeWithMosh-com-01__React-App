import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
// import './index.css'     // Replacing what Vite created by default with Bootstrap
import "bootstrap/dist/css/bootstrap.css"
  // https://getbootstrap.com/

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
