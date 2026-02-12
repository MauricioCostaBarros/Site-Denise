import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import HowItWorks from './components/Howitworks';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css'; 

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <About />
      <Services />
      <HowItWorks />
      <Contact />
      <Footer />
      
      <a 
        href="https://wa.me/5511971437105?text=Olá,%20gostaria%20de%20saber%20mais%20sobre%20a%20consulta."
        className="whatsapp-float"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img 
          src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" 
          alt="Fale Conosco no WhatsApp" 
        />
      </a>
    </div>
  );
}

export default App;