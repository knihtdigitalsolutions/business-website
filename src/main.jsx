import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import { BrowserRouter, Routes, Route } from 'react-router';
import { AppProviders } from './context/AppProviders.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <AppProviders>
        <Routes>
          <Route path="/*" element={<App />} />
        </Routes>
      </AppProviders>
    </BrowserRouter>
  </StrictMode>
)
