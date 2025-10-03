import React from 'react';

const Hero = () => {
  return (
    <section id="hero" className="hero">
      <div className="container">
        <div className="hero-grid">
          <div className="hero-text">
            <h1>Nutrição que transforma, sem sair da sua rotina.</h1>
            <p>Aprenda a ter uma relação saudável com a comida, alcance seus objetivos e viva com mais energia e bem-estar. A nutrição vai além do prato.</p>
            <a href="#contact" className="cta-button">Comece sua transformação</a>
          </div>
          <div className="hero-image">
            {/* Imagem vinda da pasta /public */}
            <img src="/hero-background.jpg" alt="Prato com comida saudável" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;