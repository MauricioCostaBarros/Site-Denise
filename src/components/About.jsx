import React from 'react';

const About = () => {
  return (
    <section id="about" className="section">
      <div className="container">
        <div className="about-grid">
          <div className="about-image">
            <img src="/foto-denise.jpg" alt="Nutricionista Denise Barros" />
          </div>
          <div className="about-text">
            <h2 className="section-title" style={{ textAlign: 'left', marginBottom: '20px' }}>Sobre Mim</h2>
            <p>Sou nutricionista clínica com atuação voltada à saúde da mulher em suas diferentes fases da vida. Minha prática é fundamentada em evidências científicas e conduzida por avaliação clínica criteriosa.</p>
            <p>Cada plano nutricional é estruturado a partir da análise do histórico de saúde, padrão alimentar, exames laboratoriais e objetivos individuais, respeitando as particularidades do metabolismo feminino.</p>
            <p>Atendo mulheres que buscam melhora consistente da composição corporal, equilíbrio metabólico e suporte às alterações hormonais, por meio de acompanhamento técnico, individualizado e seguro.</p>
            <p>O atendimento é realizado de forma 100% online, com responsabilidade profissional e acompanhamento contínuo.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;