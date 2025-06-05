import React from "react";

import '../styles/login.css'
import logoIcon from '../assets/images/ideiafy-logo.png'
import luaIcon from '../assets/icons/lua.svg'
import imgCard from '../assets/images/boneco-ideia.png'


export default function Login() {
    return (
        <div className="root">

            <div className="mainLeft">

                <div className="icons">
                    <img className="logoIcon icon" src={logoIcon} />
                    <img className="luaIcon icon" src={luaIcon} />
                </div>

                <div className="card">
                    <h1 className="tituloCard titulo">Sobre nós</h1>
                    <p className="textoCard texto">Lorem ipsum dolor sit amet, consectetur adipiscing     elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    <img className="imgCard" src={imgCard} />
                </div>
            </div>

            <div className="mainRight">

                <div className="login">
                    <h1 className="tituloLogin titulo">Bem vindo de Volta!</h1>
                    <p className="textoLogin texto"> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>

                    <form className="formulario">
                        <input placeholder="Email:" className="inputEmail input subtitulo" />
                        <input placeholder="Senha:" className="inputSenha input subtitulo" />
                        <button type="submit" className="buttonLogin button subtitulo">Entrar</button>
                    </form>

                    <h2 className="subtituloLogin subtitulo">Esqueceu a senha?</h2>
                </div>

                <div className="separacao">
                    <div className="linha"> </div>
                    <h1 className="tituloSeparacao titulo">ou</h1>
                    <div className="linha"></div>
                </div>

                <div className="outro">
                    <div className="caixa" />
                    <div className="caixa" />
                    <div className="caixa" />
                </div>

            </div>

        </div>
    );
}
