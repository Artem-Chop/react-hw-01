import React from 'react';
import { createRoot } from 'react-dom/client';
import 'modern-normalize/modern-normalize.css';
import { BrowserRouter } from 'react-router-dom';
// import globalStyles from './styles/shared.scss';

import App from './App';

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
