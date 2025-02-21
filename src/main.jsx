import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import AppEnrutador from './router/AppEnrutador'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import "bootstrap-icons/font/bootstrap-icons.css";
import { AppProvider } from './contexts/AppProvider';
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AppProvider>
      <AppEnrutador />
    </AppProvider>
  </StrictMode>,
)
