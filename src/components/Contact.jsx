import React from 'react';

import { FaWhatsapp, FaInstagram } from 'react-icons/fa';

const Contact = () => {
  return (
    <section id="contact" className="section">
      <div className="container">
        <h2 className="section-title">Entre em Contato</h2>
        <p className="section-subtitle">Vamos começar sua jornada para uma vida mais saudável? Me envie uma mensagem!</p>
        <div className="contact-grid">
          <div className="contact-info">
            <h3>Informações de Contato</h3>
            <p>
              <strong>Atendimento 100% Online</strong><br />
              <p>
                O formato Online oferece:
                <li>Flexibilidade de agenda</li>
                <li>Atendimento em qualquer localidade</li>
                <li>Praticidade e organização</li>
              </p>
            </p>
            <p><strong>Telefone:</strong> (11) 99313-2104</p>
            <p><strong>Email:</strong> contato@nutridenisebarros.com.br</p>
            <div className="social-links">
              <a href="https://wa.me/5511993132104" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="WhatsApp">
                <FaWhatsapp />
              </a>
              <a href="https://instagram.com/denisebarros_nutri" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="Instagram">
                <FaInstagram />
              </a>
            </div>
          </div>
          <div className="contact-form">
            <h3>Envie uma mensagem</h3>
            <form name="contact" method="POST" data-netlify="true" action="/obrigado">
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