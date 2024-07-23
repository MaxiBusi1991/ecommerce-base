import React from 'react'
import ReactDOM from 'react-dom/client'
import { HelmetProvider } from 'react-helmet-async'
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'
import App from './App.jsx'
import { StoreProvider } from './Store.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <StoreProvider>
      <HelmetProvider>
        <App />
      </HelmetProvider>
    </StoreProvider>
  </React.StrictMode>,
)
