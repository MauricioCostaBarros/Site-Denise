import React, { useState } from "react";

function Header() {
  const [active, setActive] = useState(false);

  const toggleMenu = () => {
    setActive(!active);
  };

  return (
    <header className="header">
      <nav
        className="container navbar"
        aria-label="Navegação principal"
        onKeyDown={(event) => {
          if (event.key === "Escape") setActive(false);
        }}
      >
        <a href="#home" className="nav-logo">
          Denise Barros
          <span className="crn-text">CRN 3-82573</span>
        </a>

        {/* Ícone do Menu Hambúrguer (só aparece no mobile via CSS) */}
        <button
          type="button"
          className={`hamburger ${active ? "active" : ""}`}
          onClick={toggleMenu}
          aria-expanded={active}
          aria-controls="navigation-menu"
          aria-label={active ? "Fechar menu" : "Abrir menu"}
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>

        {/* Menu de Navegação */}
        <ul
          id="navigation-menu"
          className={`nav-menu ${active ? "active" : ""}`}
        >
          <li className="nav-item">
            <a
              href="#home"
              className="nav-link"
              onClick={() => setActive(false)}
            >
              Início
            </a>
          </li>
          <li className="nav-item">
            <a
              href="#about"
              className="nav-link"
              onClick={() => setActive(false)}
            >
              Sobre
            </a>
          </li>
          <li className="nav-item">
            <a
              href="#services"
              className="nav-link"
              onClick={() => setActive(false)}
            >
              Área de Atuação
            </a>
          </li>
          <li className="nav-item">
            <a
              href="#how-it-works"
              className="nav-link"
              onClick={() => setActive(false)}
            >
              Como Funciona
            </a>
          </li>
          <li className="nav-item">
            <a
              href="#contact"
              className="nav-link"
              onClick={() => setActive(false)}
            >
              Contato
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
