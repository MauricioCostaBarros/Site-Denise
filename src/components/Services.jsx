import React, { useState } from 'react';

function Services() {
  const [selectedService, setSelectedService] = useState(null);

  const services = [
    {
      id: 1,
      title: "Saúde da Mulher",
      description: "Abordagem nutricional estruturada para mulheres em diferentes fases da vida.",
      details: "Abordagem nutricional estruturada para mulheres em diferentes fases da vida, considerando alterações hormonais, impactos metabólicos e inflamatórios, e mudanças na composição corporal."
    },
    {
      id: 2,
      title: "Metabolismo",
      description: "Planejamento nutricional direcionado à redução de gordura, recomposição corporal e suporte à hipertrofia.",
      details: "Planejamento nutricional direcionado à redução de gordura, recomposição corporal e suporte à hipertrofia, com foco na preservação e desenvolvimento de massa magra, otimização metabólica e organização alimentar sustentável."
    },
    {
      id: 3,
      title: "Obesidade",
      description: "Conduta nutricional para mulheres em tratamento clínico da obesidade, incluindo o uso de medicamentos injetáveis.",
      details: "Conduta nutricional para mulheres em tratamento clínico da obesidade, incluindo o uso de medicamentos injetáveis, como os análogos de GLP-1, com foco na preservação de massa magra, adequação proteica e manutenção do equilíbrio metabólico."
    },
  ];

  return (
    <section id="services" className="section">
      <div className="container">
        <h2 className="section-title">Áreas de Atuação</h2>
        <br />

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
              <div style={{ display: 'flex', justifyContent: 'center' }}>
                <a href="#contact" className="cta-button" onClick={() => setSelectedService(null)}>
                  Agendar este serviço
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default Services;