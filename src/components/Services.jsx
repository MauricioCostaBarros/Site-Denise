import React from 'react';

// Passamos a função `onServiceClick` como uma "propriedade" para o componente
const Services = ({ onServiceClick }) => { 
  
  const servicesData = [
    { title: "Nutrição Clínica", description: "Através de uma abordagem personalizada, avalio sua saúde através de exames e/ou sintomas, hábitos alimentares e necessidades individuais para criar estratégias nutricionais e suplementação se necessário, promovendo bem-estar, qualidade de vida e reestabelecimento da saúde." },
    { title: "Emagrecimento", description: "Nada de passar fome ou viver de dietas impossíveis! Aqui, o foco é um emagrecimento prazeroso e sustentável, respeitando seu corpo e sua rotina. Te ensino a se alimentar de forma equilibrada e conquistar resultados realmente duradouros." },
    { title: "Nutrição Estética", description: "Sabe aquela flacidez que incomoda, a celulite aparente, as unhas fracas ou os cabelos ralos? Tudo isso está diretamente ligado à sua alimentação! Com a nutrição e estratégias certas, é possível melhorar a firmeza da pele, reduzir inflamações, estimular a produção de colágeno e devolver força e brilho para cabelos e unhas. Eu te ajudo a cuidar da sua beleza de dentro para fora, com equilíbrio e sem soluções temporárias." },
    { title: "Saúde da Mulher", description: "Seu corpo muda ao longo da vida, e a nutrição precisa acompanhar essas fases! Cansaço excessivo, inchaço, alterações hormonais, TPM intensa, falta de libido... nada disso é normal. Seja para equilibrar hormônios, aliviar sintomas da TPM, menopausa, melhorar a fertilidade ou simplesmente se sentir mais disposta e confiante, a nutrição pode ser sua grande aliada. Com uma abordagem leve e personalizada, te ajudo a entender suas necessidades e cuidar da sua saúde em todas as fases da vida. Você merece se sentir bem todos os dias!" },
    { title: "Atendimento presencial e online", description: "Atendimento presencial realizado no Metrô Jabaquara na cidade de São Paulo e atendimento online para todo Brasil." }
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