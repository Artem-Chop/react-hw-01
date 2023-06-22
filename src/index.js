import React from 'react';
import { createRoot } from 'react-dom/client';
import 'modern-normalize/modern-normalize.css';
import globalStyles from './styles/shared.scss';
import store from './redux/store';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';

import App from 'App';

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store.store}>
      <PersistGate loading={null} persistor={store.persistor}>
        <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
