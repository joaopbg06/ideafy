import React, { useEffect, useRef, useState } from "react";
import Images from '../assets/images';
import '../styles/inicio.css';

export default function Inicio() {
    const [tema, setTema] = useState("escuro");

    const toggleIcon = () => {
        setTema((prev) => (prev === "escuro" ? "claro" : "escuro"));
    };

    const bannerImages = [
        Images.Banner1, 
        Images.Banner2,
        Images.Banner3
    ];
    
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const intervalRef = useRef(null);

    const resetInterval = () => {
        if (intervalRef.current) {
            clearInterval(intervalRef.current);
        }
        intervalRef.current = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % bannerImages.length);
        }, 5000);
    };

    useEffect(() => {
        resetInterval();
        return () => clearInterval(intervalRef.current);
    }, [bannerImages.length]);

    const handleManualChange = (index) => {
        setCurrentImageIndex(index);
        resetInterval();
    };

    const handleContinuar = () => {
        // navigate("/login") - adicione aqui quando integrar com react-router
    };

    // Ícones SVG para um visual mais profissional
    const SunIcon = () => (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM7.5 12a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM18.894 6.166a.75.75 0 00-1.06-1.06l-1.591 1.59a.75.75 0 101.06 1.061l1.591-1.59zM21.75 12a.75.75 0 01-.75.75h-2.25a.75.75 0 010-1.5H21a.75.75 0 01.75.75zM17.834 18.894a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 10-1.061 1.06l1.59 1.591zM12 18a.75.75 0 01.75.75V21a.75.75 0 01-1.5 0v-2.25A.75.75 0 0112 18zM7.758 17.303a.75.75 0 00-1.061-1.06l-1.591 1.59a.75.75 0 001.06 1.061l1.591-1.59zM6 12a.75.75 0 01-.75.75H3a.75.75 0 010-1.5h2.25A.75.75 0 016 12zM6.697 7.757a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 00-1.061 1.06l1.59 1.591z"/>
        </svg>
    );

    const MoonIcon = () => (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
            <path fillRule="evenodd" d="M9.528 1.718a.75.75 0 01.162.819A8.97 8.97 0 009 6a9 9 0 009 9 8.97 8.97 0 003.463-.69.75.75 0 01.981.98 10.503 10.503 0 01-9.694 6.46c-5.799 0-10.5-4.701-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 01.818.162z" clipRule="evenodd"/>
        </svg>
    );

    return (
        <div id="Inicio" className={tema === 'escuro' ? 'escuro-fundo-cinza' : 'claro-fundo-bege'}>
            <div className="conteudo">
                <div className="iconPlaceTema">
                    <button 
                        className="temaIcon icon" 
                        onClick={toggleIcon}
                        aria-label="Alternar tema"
                        title={tema === 'escuro' ? 'Mudar para tema claro' : 'Mudar para tema escuro'}
                    >
                        {tema === 'escuro' ? <SunIcon /> : <MoonIcon />}
                    </button>
                </div>

                <div className="logo">
                    <div className="logo-icon">
                        <div className="Logo">
                            <img 
                                src={Images.Logo} 
                                alt="Logo Ideafy"
                                loading="eager"
                            />
                        </div>
                    </div>
                    <h1 className="tituloLogo">
                        <span className={tema === 'escuro' ? 'claro-color' : 'escuro-color'}>Ideia</span>
                        <span className="fy">fy</span>
                    </h1>
                </div>

                <div className="separacao"></div>

                <p className="subtitulo textoInicio">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>

                <button 
                    onClick={handleContinuar} 
                    className={`button inicioButton ${tema === "escuro" ? 'claro-color' : 'escuro-color'}`}
                >
                    Continuar
                </button>
            </div>

            <div className="ImagemFundo">
                <div className="imagem-container">
                    {bannerImages.map((img, index) => (
                        <img
                            key={index}
                            src={img}
                            alt={`Background ${index + 1}`}
                            className={`background-image ${index === currentImageIndex ? 'ativa' : ''}`}
                            loading={index === 0 ? "eager" : "lazy"}
                        />
                    ))}
                </div>

                <div className="navCarrossel">
                    {bannerImages.map((_, index) => (
                        <div
                            key={index}
                            className={`buttonCarrossel ${index === currentImageIndex ? 'ativo' : ''}`}
                            onClick={() => handleManualChange(index)}
                            role="button"
                            aria-label={`Ir para slide ${index + 1}`}
                            tabIndex={0}
                            onKeyDown={(e) => {
                                if (e.key === 'Enter' || e.key === ' ') {
                                    handleManualChange(index);
                                }
                            }}
                        ></div>
                    ))}
                </div>
            </div>
        </div>
    );
}