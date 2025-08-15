import { Routes, Route } from "react-router-dom";

import Inicio from "./pages/inicio.js";
import Login from "./pages/login.js";

export default function AppRoutes() {

    return (
        <>
            {/* Define as rotas aqui */}
            <div className="main">
                <Routes>
                    <Route path="/" element={<Inicio />} />
                    <Route path="/login" element={<Login />} />
                </Routes>
            </div>
        </>
    );
}
