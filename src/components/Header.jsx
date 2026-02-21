import React, { useState } from 'react';

function Header() {
  const [active, setActive] = useState(false);

  const toggleMenu = () => {
    setActive(!active);
  };

  return (
    <header className="header">
      <nav className="container navbar">
        <a href="#" className="nav-logo">Denise Barros</a>
      
        {/* Ícone do Menu Hambúrguer (só aparece no mobile via CSS) */}
        <div className={`hamburger ${active ? "active" : ""}`} onClick={toggleMenu}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>

        {/* Menu de Navegação */}
        <ul className={`nav-menu ${active ? "active" : ""}`}>
          <li className="nav-item">
            <a href="#home" className="nav-link" onClick={toggleMenu}>Início</a>
          </li>
          <li className="nav-item">
            <a href="#about" className="nav-link" onClick={toggleMenu}>Sobre</a>
          </li>
          <li className="nav-item">
            <a href="#services" className="nav-link" onClick={toggleMenu}>Área de Atuação</a>
          </li>
          <li className="nav-item">
            <a href="#how-it-works" className="nav-link" onClick={toggleMenu}>Como Funciona</a>
          </li>
          <li className="nav-item">
            <a href="#contact" className="nav-link" onClick={toggleMenu}>Contato</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;