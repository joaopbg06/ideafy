import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Rotas from "./router.js";

import './styles/app.css';
import './styles/login.css'



export default function App() {
  return (
    <Router>
      <div id="Roteador">
        <Rotas />
      </div>
    </Router>
  );
}
