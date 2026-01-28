import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'swiper/css';
import './i18n/locales/i18n';
import App from './App';
import '../src/styles/style.scss';
import 'react-icons';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
       <App />
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
