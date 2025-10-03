import React from 'react';

// Passamos a função `onServiceClick` como uma "propriedade" para o componente
const Services = ({ onServiceClick }) => { 
  
  const servicesData = [
    { title: "Nutrição Clínica", description: "..." }, // Mantenha as descrições originais
    { title: "Emagrecimento", description: "..." },
    { title: "Nutrição Estética", description: "..." },
    { title: "Saúde da Mulher", description: "..." },
    { title: "Atendimento presencial e online", description: "..." }
  ];

  return (
    <section id="services" className="section">
      <div className="container">
        <h2 className="section-title">Serviços</h2>
        <div className="services-grid">
          {servicesData.map(service => (
            <div 
              key={service.title} 
              className="service-card"
              onClick={() => onServiceClick(service)}
            >
              <h3>{service.title}</h3>
              <p>Clique para saber mais</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;