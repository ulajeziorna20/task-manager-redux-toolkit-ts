import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

import { store } from './slices/store.ts';
import { Provider } from 'react-redux/es/exports'
import { BrowserRouter } from 'react-router-dom';




ReactDOM.createRoot(document.getElementById('root')! as HTMLElement).render(
  // <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  // </React.StrictMode>,
)
