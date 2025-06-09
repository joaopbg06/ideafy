import React, { useEffect, useRef, useState } from "react";

import logoIcon from '../assets/images/ideiafy-logo.png';
import luaIcon from '../assets/icons/lua.svg';
import solIcon from '../assets/icons/sol.svg';
import coracaoIcon from '../assets/icons/coracao.svg';
import comentarIcon from '../assets/icons/comentar.svg';

import imgCard from '../assets/images/boneco-ideia.png';
import imgBoxCard1 from '../assets/images/Lucas-Banner.png'
import imgBoxCard1perfil from '../assets/images/Lucas-perfil.png'
import imgBoxCard2 from '../assets/images/Debora-banner.png'

export function Cards({ tema, slide }) {

    if (slide === 'sobreNos') {
        return (
            <div className={`card card1 `}>
                <h1 className="titulo">Sobre nós</h1>
                <p className={`texto ${tema === 'escuro' ? 'claro-color' : 'escuro-color'}`}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <img id='imgCard1' className="imgCard" src={imgCard} alt="Card" />
            </div>
        )
    }
    else if (slide === 'Login') {
        return (
            <div className={`card card2 `}>
                <div className="headerCard">
                    <h1 className="titulo">Login</h1>
                    <p className={` texto ${tema === 'escuro' ? 'claro-color' : 'escuro-color'}`}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                </div>

                <div className="boxCards">
                    <div id="card1" class="boxCard">
                        <img id="imgCard2" class="imgCard" src={imgBoxCard1} alt="Card" />
                        <div class="divCard corFundo-card1">
                            <h1 className="tituloCard escuro-color">Rede Mentor</h1>
                            <div className="conteudoCard">
                                <img id="imgCard3" class="imgCard" src={imgBoxCard1perfil} alt="Card" />
                                <div >
                                    <p className="nomeCard escuro-color">Lucas Andrade</p>
                                    <p className="descricaoCard ">Criei a ideia da Rede Mentor, uma plataforma que conecta jovens a mentores experientes para trocar orientações de carreira de forma prática e acessível. Agora estou buscando pessoas interessadas em contribuir para tirar esse projeto do papel e fazê-lo crescer juntos.
                                    </p>
                                </div>
                            </div>
                            <div className="buttonsCard">
                                <button class="buttonContribuir button textCard">Contribuir</button>
                                <div>
                                    <img className="iconsCard" src={coracaoIcon} />
                                    <img className="iconsCard" src={comentarIcon} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="card2" class="boxCard">
                        <img id="imgCard2" class="imgCard" src={imgBoxCard2} alt="Card" />
                        <div class="divCard corFundo-card2">
                            <h1 className="tituloCard laranja-color">EcoFusion Power</h1>
                            <div className="conteudoCard">
                                <img id="imgCard3" class="imgCard" src={imgBoxCard2} alt="Card" />
                                <div >
                                    <p className="nomeCard laranja-color">Debora Mendes</p>
                                    <p className="descricaoCard ">um gerador híbrido portátil que combina energia solar e eólica em um só dispositivo. Ele funciona em qualquer lugar, ideal para casas, áreas remotas ou emergências.
                                        É compacto, inteligente e sustentável. Já temos protótipos testados e agora estou em busca de investidores ou compradores para levar essa solução ao mercado. Quer fazer parte dessa revolução energética comigo?
                                    </p>
                                </div>
                            </div>
                            <div className="buttonsCard">
                                <button class="buttonContribuir button textCard">Contribuir</button>
                                <div>
                                    <img className="iconsCard" src={coracaoIcon} />
                                    <img className="iconsCard" src={comentarIcon} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        )
    }

}


export default function Login() {

    const [iconSrc, setIconSrc] = useState(luaIcon);
    const [tema, setTema] = useState("claro");
    const [slide, setSlide] = useState("Login");
    const [fade, setFade] = useState(false);
    const TempoCard = 5000

    const toggleIcon = () => {
        setIconSrc(prev => (prev === luaIcon ? solIcon : luaIcon));
        setTema((prev) => (prev === "escuro" ? "claro" : "escuro"));
    };

    function trocarCard() {
        setFade(true); // Ativa o fade-out
        setTimeout(() => {
            setSlide((prev) => (prev === "Login" ? "sobreNos" : "Login")); // Troca o card após a animação de fade-out
            setFade(false); // Prepara para o fade-in
        }, 500); // Tempo deve coincidir com o CSS
    }


    useEffect(() => {
        const interval = setInterval(() => {
            trocarCard()
        }, TempoCard);

        return () => clearInterval(interval);
    }, [])

    return (
        //  <div className={tema === "lua" ? "tema-lua" : "tema-sol"}></div>
        <div id="login" className={tema === 'escuro' ? 'escuro-fundo-cinza' : 'claro-fundo-bege'}>
            <div className='mainLeft'>
                <div className="icons">
                    <img className="logoIcon icon" src={logoIcon} alt="Logo" />

                    <img className="luaIcon icon" src={iconSrc} alt="Lua" onClick={toggleIcon} />
                </div>

                <div className={`card-container ${fade ? "fade-out" : "fade-in"}`}>
                    <Cards tema={tema} slide={slide} />
                </div>
            </div>

            <div className={`mainRight ${tema === "escuro" ? "claro-fundo-bege" : "escuro-fundo-cinza"}`}>
                <div className="login">
                    <h1 className="tituloLogin titulo">Bem vindo de Volta!</h1>
                    <p className={`textoLogin texto ${tema === 'escuro' ? 'escuro-color' : 'claro-color'}`}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>

                    <form className="formulario">
                        <input placeholder="Email:" className="inputEmail input subtitulo" />
                        <input placeholder="Senha:" className="inputSenha input subtitulo" />
                        <button type="submit" className={`buttonLogin button subtitulo ${tema === "escuro" ? "escuro-fundo-cinza" : "claro-fundo-branco"}`}>Entrar</button>
                    </form>

                    <h2 className={`subtituloLogin subtitulo ${tema === "escuro" ? "escuro-color" : "claro-color"}`}>Esqueceu a senha?</h2>
                </div>

                <div className="separacao">
                    <div className={`linha ${tema === "escuro" ? "escuro-fundo-preto" : "claro-fundo-branco"}`}></div>

                    <h1 className="tituloSeparacao titulo">ou</h1>
                    <div className={`linha ${tema === "escuro" ? "escuro-fundo-preto" : "claro-fundo-branco"}`}></div>
                </div>

                <div className="outros">
                    <div className={`caixa ${tema === "escuro" ? "escuro-fundo-cinza" : "claro-fundo-branco"}`}></div>
                    <div className={`caixa ${tema === "escuro" ? "escuro-fundo-cinza" : "claro-fundo-branco"}`}></div>
                    <div className={`caixa ${tema === "escuro" ? "escuro-fundo-cinza" : "claro-fundo-branco"}`}></div>
                </div>
            </div>
        </div>
    );
}
