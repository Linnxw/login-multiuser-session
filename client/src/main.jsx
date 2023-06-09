import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Login from "./page/Login"
import './index.css'
import axios from "axios"
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
axios.defaults.withCredentials=true
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <Router>
    <App />
   </Router>
  </React.StrictMode>,
)
