import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";

import AppRoutes from "./router.js";
import logo from './assets/logo.png';

import './styles/home.css'

export default function App() {
  return (
    <div className="main">
      <div className="nav">

        <img src={logo} className="imagemLogo"/>

        <Router >

    
          <div className="paginas">
            <Link className="navInicio navItem" to="/">Inicio</Link>
            <Link className="navSobre navItem" to="/">Sobre</Link>
            <Link className="navAjuda navItem" to="/">Ajuda</Link>
            <Link className="navTimes navItem" to="/">Times</Link>
            <Link className="navDev navItem" to="/">Criadores</Link>
          </div>

          <div className="login">
            <Link className="navLogin navItem" to="/">Login</Link>
            <Link className="navSingUp navItem" to="/">Registrar</Link>
          </div>

        <AppRoutes />
        </Router>

    

      </div>
      


      
    </div>
  );
}
