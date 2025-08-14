import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Rotas from "./router.js";
import { Icon } from '@iconify/react';

import './styles/reset.css'

export default function App() {
  return (
    <Router>
      <div id="Roteador">
        <Rotas />
      </div>
    </Router>
  );
}
