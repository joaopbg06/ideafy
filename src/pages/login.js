import React, { useEffect, useRef, useState } from "react";

import logoIcon from '../assets/images/ideiafy-logo.png';
import luaIcon from '../assets/icons/lua.svg';
import solIcon from '../assets/icons/sol.svg';

import imgCard from '../assets/images/boneco-ideia.png';
import imgBoxCard1 from '../assets/images/Lucas-Banner.png'

export function Cards({ tema, slide }) {

    if (slide === 'sobreNos') {
        return (
            <div className="card">
                <h1 className="tituloCard titulo">Sobre nós</h1>
                <p className={`textoCard texto ${tema === 'escuro' ? 'claro-color' : 'escuro-color'}`}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <img id='imgCard1' className="imgCard" src={imgCard} alt="Card" />
            </div>
        )
    }
    else if (slide === 'Login') {
        return (
            <div className='card'>
                <h1 className="tituloCard titulo">Login</h1>
                <p className={`textoCard texto ${tema === 'escuro' ? 'claro-color' : 'escuro-color'}`}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>

                <div className='box'>
                    <img className="imgCard" src={imgBoxCard1} alt="Card" />
                    
                </div>
            </div>
        )
    }

}


export default function Login() {

    const [iconSrc, setIconSrc] = useState(luaIcon);
    const [tema, setTema] = useState("claro");
    const [slide, setSlide] = useState("Login");

    const toggleIcon = () => {
        setIconSrc(prev => (prev === luaIcon ? solIcon : luaIcon));
        setTema((prev) => (prev === "escuro" ? "claro" : "escuro"));
    };


    return (
        //  <div className={tema === "lua" ? "tema-lua" : "tema-sol"}></div>
        <div id="login" className={tema === 'escuro' ? 'escuro-fundo-cinza' : 'claro-fundo-bege'}>
            <div className='mainLeft'>
                <div className="icons">
                    <img className="logoIcon icon" src={logoIcon} alt="Logo" />
                    {/* Aplicando a ref no elemento que quer monitorar */}
                    <img className="luaIcon icon" src={iconSrc} alt="Lua" onClick={toggleIcon} />
                </div>

                <Cards tema={tema} slide={slide} />
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
