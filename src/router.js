import { Routes, Route } from "react-router-dom";

import Inicio from "./pages/inicio.js";

export default function AppRoutes() {

    return (
        <>
            {/* Define as rotas aqui */}
            <div className="main">
                <Routes>
                    <Route path="/" element={<Inicio />} />
                </Routes>
            </div>
        </>
    );
}
