import React from 'react';

// Importando ícones para usar no formulário
import { FaWhatsapp, FaInstagram } from 'react-icons/fa';

const Contact = () => {
  return (
    <section id="contact" className="section">
      <div className="container">
        <h2 className="section-title">Entre em Contato</h2>
        <p className="section-subtitle">Vamos começar sua jornada para uma vida mais saudável? Me envie uma mensagem!</p>
        <div className="contact-grid">
          
          {/* Coluna da Esquerda: Informações */}
          <div className="contact-info">
            <h3>Informações de Contato</h3>
            <p>
              <strong>Atendimento presencial:</strong><br />
              Green Work Boulevard Jabaquara - Av. Eng. Armando de Arruda Pereira, 2937 - Jabaquara, São Paulo
            </p>
            <p><strong>Atendimentos Online para todo Brasil.</strong></p>
            <p><strong>Telefone:</strong> (11) 99313-2104</p>
            <p><strong>Email:</strong> nutridenisebarros@gmail.com</p>
            <div className="social-links">
              <a href="https://wa.me/5511993132104" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="WhatsApp">
                <FaWhatsapp />
              </a>
              <a href="https://instagram.com/denisebarros_nutri" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="Instagram">
                <FaInstagram />
              </a>
            </div>
          </div>

          {/* Coluna da Direita: Formulário */}
          <div className="contact-form">
            <h3>Envie uma mensagem</h3>
            <form name="contact" method="POST" data-netlify="true">
              <input type="hidden" name="form-name" value="contact" />
              
              <div className="form-group">
                <label htmlFor="name">Nome completo</label>
                <input type="text" id="name" name="name" placeholder="Seu nome completo" required />
              </div>

              <div className="form-group">
                <label htmlFor="phone">Telefone</label>
                <input type="tel" id="phone" name="phone" placeholder="Telefone para contato" required />
              </div>

              <div className="form-group">
                <label htmlFor="message">Sua mensagem</label>
                <textarea id="message" name="message" placeholder="Escreva sua mensagem aqui..." rows="5" required></textarea>
              </div>

              <button type="submit" className="cta-button">Enviar Mensagem</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;