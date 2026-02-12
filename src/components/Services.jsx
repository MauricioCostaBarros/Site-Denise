import React, { useState } from 'react';

function Services() {
  const [selectedService, setSelectedService] = useState(null);

  const services = [
    {
      id: 1,
      title: "Emagrecimento Definitivo",
      description: "Perca peso sem dietas restritivas. Foco em reeducação alimentar e mudança de hábitos.",
      details: "Nosso programa de emagrecimento não foca apenas na balança, mas na sua composição corporal e saúde metabólica. Você receberá um plano alimentar flexível, estratégias para lidar com a fome emocional e acompanhamento contínuo para garantir que os resultados sejam sustentáveis a longo prazo."
    },
    {
      id: 2,
      title: "Hipertrofia e Performance",
      description: "Estratégias nutricionais para ganho de massa muscular e melhor desempenho nos treinos.",
      details: "A nutrição é o combustível do seu treino. Desenvolvemos protocolos específicos de pré e pós-treino, suplementação inteligente (quando necessária) e ajuste de macronutrientes para maximizar sua força, recuperação muscular e ganho de massa magra."
    },
    {
      id: 3,
      title: "Nutrição Funcional",
      description: "Tratamento de desequilíbrios, alergias e melhora da imunidade através dos alimentos.",
      details: "A nutrição funcional rastreia a causa raiz dos seus sintomas. Seja enxaqueca, fadiga, problemas intestinais ou alergias, utilizamos alimentos específicos para desinflamar seu corpo, melhorar sua microbiota intestinal e restaurar sua vitalidade."
    },
    {
      id: 4,
      title: "Saúde da Mulher",
      description: "Acompanhamento especializado para TPM, SOP, menopausa e gestação.",
      details: "Cada fase da vida da mulher exige cuidados nutricionais específicos. Atuamos no controle de sintomas da TPM, suporte nutricional para Síndrome do Ovário Policístico (SOP), preparação para engravidar, gestação saudável e alívio dos sintomas da menopausa."
    }
  ];

  return (
    <section id="services" className="section">
      <div className="container">
        <h2 className="section-title">Meus Serviços</h2>
        <p className="section-subtitle">
          Escolha o plano ideal para o seu momento de vida. Clique nos cards para saber mais.
        </p>

        <div className="services-grid">
          {services.map((service) => (
            <div 
              key={service.id} 
              className="service-card"
              onClick={() => setSelectedService(service)}
            >
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <span style={{color: 'var(--primary-color)', fontSize: '0.9rem', fontWeight: 'bold'}}>
                Ler mais &rarr;
              </span>
            </div>
          ))}
        </div>

        {/* Lógica do Modal: Só aparece se houver um serviço selecionado */}
        {selectedService && (
          <div className="modal-overlay" onClick={() => setSelectedService(null)}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <button 
                className="modal-close" 
                onClick={() => setSelectedService(null)}
              >
                &times;
              </button>
              <h3 className="modal-title">{selectedService.title}</h3>
              <p>{selectedService.details}</p>
              <br />
              <a href="#contact" className="cta-button" onClick={() => setSelectedService(null)}>
                Agendar este serviço
              </a>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default Services;