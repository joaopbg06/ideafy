import React from "react";
import { Routes, Route, useLocation, Link } from "react-router-dom";

import Sobre from "./pages/sobre.js";
import Login from "./pages/login.js";

import logo from './assets/images/ideiafy-logonome.png';

export default function AppRoutes() {
    const location = useLocation();

    // Rotas que não usam o layout principal
    const noLayoutRoutes = ["/login", '/registrar'];

    const isNoLayout = noLayoutRoutes.includes(location.pathname);

    return (
        <>
            {/* Renderiza o layout principal apenas se não estiver em uma rota sem layout */}
            {!isNoLayout && (
                <div className="header">
                    <div className="nav">
                        <img src={logo} className="imagemLogo" alt="Logo" />
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
                    <Route path="/sobre" element={<Sobre />} />
                    <Route path="/login" element={<Login />} />
                    {/* Adicione outras rotas conforme necessário */}
                </Routes>
            </div>
        </>
    );
}
