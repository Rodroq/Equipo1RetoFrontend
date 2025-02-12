import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import AppEnrutador from './router/AppEnrutador'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
// import './index.css'
// import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    <AppEnrutador />
  </StrictMode>,
)
