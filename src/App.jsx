import React, { useState } from 'react';
import './App.css';

import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import HowItWorks from './components/Howitworks';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';

// O Modal pode ficar aqui ou ter seu próprio arquivo em /components
function ServiceModal({ service, onClose }) {
  if (!service) return null;
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>&times;</button>
        <h3 className="modal-title">{service.title}</h3>
        <p>{service.description}</p>
      </div>
    </div>
  );
}

function App() {
  const [activeService, setActiveService] = useState(null);

  const handleServiceClick = (service) => {
    setActiveService(service);
  };

  const closeModal = () => {
    setActiveService(null);
  };

  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <HowItWorks />
        <Services onServiceClick={handleServiceClick} />
        <Contact />
      </main>
      <Footer />
      
      <ServiceModal service={activeService} onClose={closeModal} />
    </>
  );
}

export default App;