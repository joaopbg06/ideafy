import React from "react";
import { Routes, Route, useLocation, Link } from "react-router-dom";

import Sobre from "./pages/sobre.js";
import Login from "./pages/login.js";
import Feed from './pages/feed.js'
import Inicio from "./pages/inicio.js";

import images from "./assets/images";

export default function AppRoutes() {
    const location = useLocation();

    // Rotas que não usam o headerNav
    const noLayoutRoutes = ["/login", '/registrar', '/feed', '/'];

    const isNoLayout = noLayoutRoutes.includes(location.pathname);

    return (
        <>
            {/* Renderiza o headerNav apenas se não estiver em uma rota sem layout */}
            {!isNoLayout && (
                <div className="header">
                    <div className="nav">
                        <img src={images.logoIcon} className="imagemLogo" alt="Logo" />
                        <div className="paginas">
                            <Link className="navInicio navItem" to="/inicio">Inicio</Link>
                            <Link className="navSobre navItem" to="/sobre">Sobre</Link>
                            <Link className="navAjuda navItem" to="/ajuda">Ajuda</Link>
                            <Link className="navTimes navItem" to="/time">Times</Link>
                            <Link className="navDev navItem" to="/criadores">Criadores</Link>
                        </div>
                        <div className="login">
                            <Link className="navLogin navItem" to="/login">Login</Link>
                            <Link className="navSingUp navItem" to="/registrar">Registrar</Link>
                        </div>
                    </div>
                </div>
            )}

            {/* Define as rotas aqui */}
            <div className="main">
                <Routes>
                    <Route path="/" element={<Inicio />} />
                    <Route path="/sobre" element={<Sobre />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/feed" element={<Feed />} />
                    {/* Adicione outras rotas conforme necessário */}
                </Routes>
            </div>
        </>
    );
}
