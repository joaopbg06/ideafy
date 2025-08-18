import React, { useState } from "react";
import Images from "../assets/images";
import "../styles/desenvolvimento.css";
import Sidebar from "./componentes/sidebar";
import MobileHeader from "./componentes/mobileHeader";

export default function PaginaDesenvolvimento() {
  const [tema, setTema] = useState("escuro");
  const [activeNavItem, setActiveNavItem] = useState("desenvolvimento");

  const toggleTema = () => {
    setTema((prev) => (prev === "escuro" ? "claro" : "escuro"));
  };

  const handleNavigation = (item) => {
    setActiveNavItem(item);
    // Adicione sua lógica de navegação aqui
  };

  const BulbIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <circle cx="12" cy="12" r="5"/>
      <line x1="12" y1="1" x2="12" y2="3"/>
      <line x1="12" y1="21" x2="12" y2="23"/>
      <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/>
      <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
      <line x1="1" y1="12" x2="3" y2="12"/>
      <line x1="21" y1="12" x2="23" y2="12"/>
      <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/>
      <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
    </svg>
  );

  const ConstructionIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
      <line x1="8" y1="21" x2="16" y2="21"/>
      <line x1="12" y1="17" x2="12" y2="21"/>
    </svg>
  );

  return (
    <div id="PaginaDesenvolvimento" className={tema === "escuro" ? "escuro-fundo-cinza" : "claro-fundo-bege"}>
      {/* Header Mobile */}
      <MobileHeader tema={tema} toggleTema={toggleTema} title="Ideafy" />

      {/* Sidebar */}
      <Sidebar 
        tema={tema}
        toggleTema={toggleTema}
        activeItem={activeNavItem}
        onNavigate={handleNavigation}
      />

      {/* Conteúdo Principal */}
      <main className="developmentContent">
        <div className="developmentContainer">
          {/* Seção do Mascote */}
          <div className="mascotSection">
            <div className="mascotImageContainer">
              <img 
                src={Images.Mascote || "/default-mascot.png"} 
                alt="Mascote Ideafy apontando para cima com uma camiseta azul e boné" 
                className="mascotImage"
              />
            </div>
          </div>

          {/* Seção do Conteúdo */}
          <div className="contentSection">
            <div className="developmentHeader">
              <div className="BadgeStatus">
                <ConstructionIcon />
                <span>Página em Desenvolvimento</span>
              </div>
            </div>

            <div className="developmentText">
              <h1 className="mainTitle">
                Em breve, novas funcionalidades e conteúdos estarão 
                disponíveis aqui.
              </h1>
              
              <p className="subtitle">
                Fique de olho nas próximas atualizações, pois muitas 
                novidades estão por vir.
              </p>

              <div className="thankYouMessage">
                <BulbIcon />
                <p>Obrigado por acompanhar o início dessa jornada!</p>
              </div>
            </div>

            <div className="developmentActions">
              <button className="primaryBtn" onClick={() => window.history.back()}>
                Voltar ao Feed
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}