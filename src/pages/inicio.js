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
    const intervalRef = useRef(null); // Referência para o intervalo

    // Função para reiniciar o intervalo
    const resetInterval = () => {
        if (intervalRef.current) {
            clearInterval(intervalRef.current); // Limpa o intervalo atual
        }
        intervalRef.current = setInterval(() => {

            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % bannerImageKeys.length);

        }, 10000); // Intervalo total (incluindo fade)
    };

    // Inicializa o intervalo no carregamento do componente
    useEffect(() => {
        resetInterval();

        return () => clearInterval(intervalRef.current); // Limpa o intervalo ao desmontar
    }, [bannerImageKeys.length]);

    // Função para atualizar o índice manualmente e reiniciar o intervalo
    const handleManualChange = (index) => {
        setCurrentImageIndex(index); // Atualiza o índice
        resetInterval(); // Reinicia o intervalo
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

            <div className={`ImagemFundo `}>
                <img
                    src={images[bannerImageKeys[currentImageIndex]]}
                    alt="Background"
                    className="background-image"
                />

                <div className="navCarrossel">
                    {bannerImageKeys.map((_, index) => (
                        <div
                            key={index}
                            className={`buttonCarrossel ${index === currentImageIndex ? 'ativo' : ''}`}
                            onClick={() => handleManualChange(index)}
                        ></div>
                    ))}
                </div>
            </div>

        </div>
    )
}
