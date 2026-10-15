import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import HowItWorks from "./components/Howitworks";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <HowItWorks />
        <Contact />
      </main>
      <Footer />

      <a
        href="https://wa.me/5511993132104?text=Olá,%20gostaria%20de%20saber%20mais%20sobre%20a%20consulta."
        className="whatsapp-float"
        aria-label="Fale Conosco no WhatsApp"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaWhatsapp aria-hidden="true" />
      </a>
    </div>
  );
}

export default App;
