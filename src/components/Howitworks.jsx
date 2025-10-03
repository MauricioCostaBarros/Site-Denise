import React from 'react';

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="section">
      <div className="container">
        <h2 className="section-title">Como Funciona a Consulta</h2>
        <p className="section-subtitle">Meu método é focado em entender você por completo para criar um plano alimentar que se encaixe na sua vida, e não o contrário.</p>
        <div className="steps-grid">
          <div className="step-card">
            <div className="step-number">1</div>
            <h3>Avaliação Completa</h3>
            <p>Na nossa primeira conversa, vamos aprofundar no seu histórico, rotina, objetivos e dificuldades.</p>
          </div>
          <div className="step-card">
            <div className="step-number">2</div>
            <h3>Plano Personalizado</h3>
            <p>Você receberá um plano alimentar exclusivo, com metas realistas e receitas deliciosas e práticas.</p>
          </div>
          <div className="step-card">
            <div className="step-number">3</div>
            <h3>Acompanhamento</h3>
            <p>Estarei sempre disponível para tirar dúvidas, ajustar o plano e comemorar suas conquistas com você.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;