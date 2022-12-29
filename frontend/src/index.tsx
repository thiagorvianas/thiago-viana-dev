import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { DispenserProvider } from './contexts/Dispenser/DispenserProvider';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <BrowserRouter>
    <DispenserProvider>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </DispenserProvider>
  </BrowserRouter>
);

reportWebVitals();
