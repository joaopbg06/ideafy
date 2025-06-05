import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Rotas from "./router.js";



export default function App() {
  return (
    <Router>
      <div>
        <Rotas />
      </div>
    </Router>
  );
}
