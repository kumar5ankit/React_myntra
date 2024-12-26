import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Header } from './comman/Header.jsx';
import { Body } from './comman/Body.jsx';
import { Footer } from './Footer.jsx';



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <Header/>
    <Body/>
    <Footer/>

  </React.StrictMode>,
)
