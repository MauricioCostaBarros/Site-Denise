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
            <p>Sou Nutricionista Especialista em Nutrição Clínica e Estética. Cuido de você de forma integral ouvindo com atenção seus sintomas e queixas, observando a sua energia, seu bem-estar e sua autoestima.</p>
            <p>A nutrição vai além da alimentação, ela abraça seu corpo, sua mente e sua rotina. Meu compromisso é te guiar por um caminho de equilíbrio e auto cuidado, aliviando e tratando as suas queixas, proporcionando a você mais saúde, vitalidade e confiança!</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;