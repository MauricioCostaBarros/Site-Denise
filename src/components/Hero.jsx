import React from 'react';

function Hero() {
  return (
    <section id="home" className="hero">
      <div className="container hero-container">
        <div className="hero-text">
          <h1>Lorem ipsum dolor dipisicin sit amet consectetur elit</h1>
          <p>
            Redescubra sua saúde e com um plano alimentar personalizado,
            feito sob medida para seu cotidiano!
          </p>
          <a href="#contact" className="cta-button">Agende sua Consulta</a>
        </div>
        {/* A imagem agora é background no CSS, então removemos a tag img daqui para limpar o layout */}
      </div>
    </section>
  );
}

export default Hero;