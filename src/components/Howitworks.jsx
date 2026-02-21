import React from 'react';

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="section">
      <div className="container">
        <h2 className="section-title">Como Funciona o Atendimento</h2>
        <p className="section-subtitle">
<h4>Consulta Individual</h4>
Indicada para avaliação pontual, direcionamento estratégico inicial ou segunda opinião profissional.
Inclui análise clínica completa e definição de conduta personalizada.
<h4>Programa de Acompanhamento de 12 Semanas</h4>
Modelo estruturado para mulheres que desejam evolução consistente, com ajustes progressivos, monitoramento contínuo e refinamento da estratégia nutricional ao longo do processo.

</p>
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