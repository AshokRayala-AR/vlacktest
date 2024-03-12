import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
// @ts-ignore
import i18n from "../i18n.js";

i18n.changeLanguage('en');
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
          <App />
  </React.StrictMode>,
)
