import React, { useState } from "react";
import Images from "../../assets/images";
import "../../styles/sidebar.css"
import { useNavigate } from 'react-router-dom';

export default function Sidebar({ tema, toggleTema, onSearchModal, activeItem = "home", onNavigate }) {
  const [showSearchModal, setShowSearchModal] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  // Ícones SVG
  const SunIcon = () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM7.5 12a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM18.894 6.166a.75.75 0 00-1.06-1.06l-1.591 1.59a.75.75 0 101.06 1.061l1.591-1.59zM21.75 12a.75.75 0 01-.75.75h-2.25a.75.75 0 010-1.5H21a.75.75 0 01.75.75zM17.834 18.894a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 10-1.061 1.06l1.59 1.591zM12 18a.75.75 0 01.75.75V21a.75.75 0 01-1.5 0v-2.25A.75.75 0 0112 18zM7.758 17.303a.75.75 0 00-1.061-1.06l-1.591 1.59a.75.75 0 001.06 1.061l1.591-1.59zM6 12a.75.75 0 01-.75.75H3a.75.75 0 010-1.5h2.25A.75.75 0 016 12zM6.697 7.757a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 00-1.061 1.06l1.59 1.591z" />
    </svg>
  );

  const MoonIcon = () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path fillRule="evenodd" d="M9.528 1.718a.75.75 0 01.162.819A8.97 8.97 0 009 6a9 9 0 009 9 8.97 8.97 0 003.463-.69.75.75 0 01.981.98 10.503 10.503 0 01-9.694 6.46c-5.799 0-10.5-4.701-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 01.818.162z" clipRule="evenodd" />
    </svg>
  );

  const HomeIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>
    </svg>
  );

  const SearchIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="11" cy="11" r="8"/>
      <path d="m21 21-4.35-4.35"/>
    </svg>
  );

  const NotificationIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/>
      <path d="M13.73 21a2 2 0 0 1-3.46 0"/>
    </svg>
  );

  const MessageIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
    </svg>
  );

  const SettingsIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="12" cy="12" r="3"/>
      <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1 1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/>
    </svg>
  );

  const UserIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
      <circle cx="12" cy="7" r="4"/>
    </svg>
  );

  const CloseIcon = () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <line x1="18" y1="6" x2="6" y2="18"/>
      <line x1="6" y1="6" x2="18" y2="18"/>
    </svg>
  );

  const navigate = useNavigate();

  const handleNavClick = (item) => {
    if (item === 'search') {
      setShowSearchModal(true);
      // Também chama o callback se existir para compatibilidade
      onSearchModal?.();
    } else if (onNavigate) {
      onNavigate(item);
    }
    
    // Navegação baseada nas suas rotas
    switch(item) {
      case 'home':
        navigate('/feed'); // assumindo que o feed é a página inicial após login
        break;
      case 'notifications':
        // navigate('/notificacoes'); // quando criar a página
        console.log('Página de notificações ainda não criada');
        break;
      case 'messages':
        // navigate('/mensagens'); // quando criar a página
        console.log('Página de mensagens ainda não criada');
        break;
      case 'account':
        navigate('/conta');
        break;
      case 'settings':
        // navigate('/configuracoes'); // quando criar a página
        console.log('Página de configurações ainda não criada');
        break;
      default:
        break;
    }
  };

  // Modal de Pesquisa
  const SearchModal = () => {
    if (!showSearchModal) return null;
    
    return (
      <div className="searchModal" onClick={() => setShowSearchModal(false)}>
        <div className="searchModalContent" onClick={(e) => e.stopPropagation()}>
          <div className="searchModalHeader">
            <h3>Pesquisar</h3>
            <button className="searchModalClose" onClick={() => setShowSearchModal(false)}>
              <CloseIcon />
            </button>
          </div>
          <div className="searchModalBody">
            <input
              type="text"
              placeholder="Digite para pesquisar..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="searchInput"
              autoFocus
            />
            <div className="searchSuggestions">
              <div className="searchCategory">
                <h4>Sugestões</h4>
                <div className="suggestionItem">
                  <SearchIcon />
                  <span>React Components</span>
                </div>
                <div className="suggestionItem">
                  <SearchIcon />
                  <span>UI/UX Design</span>
                </div>
                <div className="suggestionItem">
                  <SearchIcon />
                  <span>JavaScript Tips</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <>
      <aside className="sidebar">
        <div className="sidebarHeader">
          <div className="logoContainer">
            <img src={Images.Logo} alt="Logo Ideafy" className="logoImage" />
          </div>
        </div>

        <nav className="sidebarNav">
          <button 
            className={`navItem tooltip ${activeItem === 'home' ? 'active' : ''}`} 
            data-tooltip="Início"
            aria-label="Ir para página inicial"
            onClick={() => handleNavClick('home')}
          >
            <HomeIcon />
          </button>
          <button 
            className={`navItem tooltip ${activeItem === 'search' ? 'active' : ''}`} 
            data-tooltip="Buscar"
            aria-label="Abrir busca"
            onClick={() => handleNavClick('search')}
          >
            <SearchIcon />
          </button>
          <button 
            className={`navItem tooltip ${activeItem === 'notifications' ? 'active' : ''}`} 
            data-tooltip="Notificações"
            aria-label="Ver notificações"
            onClick={() => handleNavClick('notifications')}
          >
            <NotificationIcon />
          </button>
          <button 
            className={`navItem tooltip ${activeItem === 'messages' ? 'active' : ''}`} 
            data-tooltip="Mensagens"
            aria-label="Ver mensagens"
            onClick={() => handleNavClick('messages')}
          >
            <MessageIcon />
          </button>
          <button 
            className={`navItem tooltip ${activeItem === 'account' ? 'active' : ''}`} 
            data-tooltip="Minha Conta"
            aria-label="Acessar minha conta"
            onClick={() => handleNavClick('account')}
          >
            <UserIcon />
          </button>
          <button 
            className={`navItem tooltip ${activeItem === 'settings' ? 'active' : ''}`} 
            data-tooltip="Configurações"
            aria-label="Abrir configurações"
            onClick={() => handleNavClick('settings')}
          >
            <SettingsIcon />
          </button>
        </nav>

        <div className="sidebarFooter">
          <button
            className="temaIcon tooltip"
            data-tooltip={tema === "escuro" ? "Tema Claro" : "Tema Escuro"}
            onClick={toggleTema}
            aria-label={tema === "escuro" ? "Mudar para tema claro" : "Mudar para tema escuro"}
          >
            {tema === "escuro" ? <SunIcon /> : <MoonIcon />}
          </button>
        </div>
      </aside>

      {/* Modal de Pesquisa */}
      <SearchModal />
    </>
  );
}