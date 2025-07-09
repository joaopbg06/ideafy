import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";


import images from "../assets/images";
import "../styles/login.css";


export function Cards({ tema, slide }) {

    if (slide === 'sobreNos') {
        return (
            <div className={`card card1 `}>
                <h1 className="titulo">Sobre nós</h1>
                <p className={`texto ${tema === 'escuro' ? 'claro-color' : 'escuro-color'}`}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <img id='imgCard1' className="imgCard" src={images.imgCard} alt="Card" />
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
                        <img id="imgCard2" class="imgCard" src={images.imgBoxCard1} alt="Card" />
                        <div class="divCard corFundo-card1">
                            <h1 className="tituloCard escuro-color">Rede Mentor</h1>
                            <div className="conteudoCard">
                                <img id="imgCard3" class="imgCard" src={images.imgBoxCard1perfil} alt="Card" />
                                <div >
                                    <p className="nomeCard escuro-color">Lucas Andrade</p>
                                    <p className="descricaoCard ">Criei a ideia da Rede Mentor, uma plataforma que conecta jovens a mentores experientes para trocar orientações de carreira de forma prática e acessível. Agora estou buscando pessoas interessadas em contribuir para tirar esse projeto do papel e fazê-lo crescer juntos.
                                    </p>
                                </div>
                            </div>
                            <div className="buttonsCard">
                                <button class="buttonContribuir button textCard">Contribuir</button>
                                <div>
                                    <img className="iconsCard" src={images.coracaoIcon} />
                                    <img className="iconsCard" src={images.comentarIcon} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="card2" class="boxCard">
                        <img id="imgCard2" class="imgCard" src={images.imgBoxCard2} alt="Card" />
                        <div class="divCard corFundo-card2">
                            <h1 className="tituloCard laranja-color">EcoFusion Power</h1>
                            <div className="conteudoCard">
                                <img id="imgCard3" class="imgCard" alt="Card" />
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
                                    <img className="iconsCard" src={images.coracaoIcon} />
                                    <img className="iconsCard" src={images.comentarIcon} />
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

    const [iconSrc, setIconSrc] = useState(images.luaIcon);
    const [tema, setTema] = useState("claro");
    const [slide, setSlide] = useState("Login");
    const [fade, setFade] = useState(false);
    const TempoCard = 5000

    const toggleIcon = () => {
        setIconSrc(prev => (prev === images.luaIcon ? images.solIcon : images.luaIcon));
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


    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault(); // Evita o comportamento padrão de recarregar a página
        navigate("/feed"); // Redireciona para /feed
    };


    return (
        //  <div className={tema === "lua" ? "tema-lua" : "tema-sol"}></div>
        <div id="login" className={tema === 'escuro' ? 'escuro-fundo-cinza' : 'claro-fundo-bege'}>


            <div className={`mainRight `}>

                <div className="icons">


                    <img className={`temaIcon icon `} src={iconSrc} alt="Lua" onClick={toggleIcon} />
                </div>
                <div className="loginSide">

                    <div className="logoA">
                        <img className="logoTexto" src={images.logoIcon} alt="Logo" />
                    </div>

                    <h1 className="tituloLogin titulo">Login</h1>

                    <p className={`textoLogin texto `}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                    </p>

                    <form className="formulario" onSubmit={handleSubmit}>
                        <label className="texto">Email:</label>
                        <input
                            placeholder="texto@gmail.com"
                            className="inputEmail input texto"
                            style={{
                                backgroundImage: `url(${images.emailIcon})`,
                            }}
                        />
                        <label className="texto">Password:</label>
                        <input 
                        placeholder="********" 
                        className="inputSenha input texto"
                            style={{
                                backgroundImage: `url(${images.emailIcon})`,
                            }} />

                    </form>


                </div>

                <div className="separacaoA">
                    <div className={`linha `}></div>

                    <h1 className="tituloSeparacao subtitulo">ou</h1>
                    <div className={`linha `}></div>
                </div>

                <div className="outros">
                    <div className={`caixa `}>
                        <img src={images.githubIcon} className='loginIcons githubIcon' />
                        
                    </div>
                    <div className={`caixa `}>
                        <img src={images.googleIcon} className='loginIcons' />
                        
                    </div>
                    <div className={`caixa `}>
                        <img src={images.linkedinIcon} className='loginIcons' />
                        
                    </div>
                </div>
            </div>

            <div className='mainLeft'>

                <div className={`card-container ${fade ? "fade-out" : "fade-in"}`}>
                    {/* <Cards tema={tema} slide={slide} /> */}
                </div>
            </div>
        </div>
    );
}
