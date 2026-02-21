import React from 'react';

function Hero() {
  return (
    <section id="home" className="hero">
      <div className="container hero-container">
        <div className="hero-text">
          <h1>Nutrição Clínica feminina com Estratégia e Individualização</h1>
          <p>
           Cuidado nutricional estruturado para promover equilíbrio metabólico, 
           suporte às alterações hormonais e melhora consistente da composição corporal.
          </p>
          <a href="#contact" className="cta-button">Agende sua Consulta</a>
        </div>
      </div>
    </section>
  );
}

export default Hero;