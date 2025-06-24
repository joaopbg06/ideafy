import React, { useEffect, useRef, useState } from "react";
import images from "../assets/images";
import '../styles/inicio.css'

export default function Inicio() {
    const [iconSrc, setIconSrc] = useState(images.solIcon);
    const [tema, setTema] = useState("escuro");

    const toggleIcon = () => {
        setIconSrc(prev => (prev === images.luaIcon ? images.solIcon : images.luaIcon));
        setTema((prev) => (prev === "escuro" ? "claro" : "escuro"));
    };


    return (
        <div id="Inicio" className={tema === 'escuro' ? 'escuro-fundo-cinza' : 'claro-fundo-bege'}>
            <div className="conteudo">

                <div className="iconPlaceTema"><img className={`temaIcon icon `} src={iconSrc} alt="Lua" onClick={toggleIcon} /></div>

                <div className="logo">
                    <img className="logoTexto" src={images.logoIcon} alt="Logo" />
                    <h1 className="tituloLogo">
                        <span className={tema === 'escuro' ? 'claro-color' : 'escuro-color'}>Ideia</span>
                        <span className="fy">fy</span>
                    </h1>

                </div>

                <div className="separacao"></div>

                <p className="subtitulo textoInicio" style={{ color: `#777777` }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>

                <button className={`button inicioButton ${tema === "escuro" ? 'claro-color' : 'escuro-color'}`}>Continuar</button>
            </div>

            <div className="ImagemFundo" style={{ backgroundImage: `url(${images.BannerInicial1})` }} />
        </div>
    )
}
