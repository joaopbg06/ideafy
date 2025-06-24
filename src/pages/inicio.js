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

    const bannerImageKeys = ["BannerInicial1", "BannerInicial2", "BannerInicial3"];
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [fade, setFade] = useState(true);

    useEffect(() => {
        const interval = setInterval(() => {
            setFade(false); // Inicia o fade-out
            setTimeout(() => {
                // Troca a imagem durante o fade-out
                setCurrentImageIndex((prevIndex) => (prevIndex + 1) % bannerImageKeys.length);
                setFade(true); // Inicia o fade-in com a nova imagem
            }, 1000); // Duração do fade-out
        }, 10000); // Intervalo total (incluindo fade)

        return () => clearInterval(interval); // Limpa o intervalo ao desmontar o componente
    }, [bannerImageKeys.length]);

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

            <div className={`ImagemFundo ${fade ? "fade-in" : "fade-out"}`} style={{ backgroundImage: `url(${images[bannerImageKeys[currentImageIndex]]})` }} />
        </div>
    )
}
