import React from 'react';

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <nav className="navbar">
          <a href="#hero" className="nav-logo">Nutri Denise Barros</a>
          <ul className="nav-menu">
            <li><a href="#about" className="nav-link">Sobre</a></li>
            <li><a href="#how-it-works" className="nav-link">Como Funciona</a></li>
            <li><a href="#services" className="nav-link">Serviços</a></li>
            <li><a href="#contact" className="nav-link">Contato</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;