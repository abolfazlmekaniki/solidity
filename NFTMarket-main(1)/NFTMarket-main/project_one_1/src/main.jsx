import React from 'react'
import ReactDOM from 'react-dom/client'
import {CounterProvider} from './conext/CounterContext'
import App from './App'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <CounterProvider>
          <App />
      </CounterProvider>
         
    </BrowserRouter>
 
  </React.StrictMode>
)
