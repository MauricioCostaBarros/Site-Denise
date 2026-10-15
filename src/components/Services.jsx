import React, { useEffect, useRef, useState } from "react";
import { LuHeart, LuActivity, LuStethoscope } from "react-icons/lu";

function Services() {
  const [selectedService, setSelectedService] = useState(null);

  const dialogRef = useRef(null);
  const icons = [LuHeart, LuActivity, LuStethoscope];

  useEffect(() => {
    if (!selectedService) return;
    const dialog = dialogRef.current;
    const previousOverflow = document.body.style.overflow;
    dialog.showModal();
    document.body.style.overflow = "hidden";
    return () => {
      dialog.close();
      document.body.style.overflow = previousOverflow;
    };
  }, [selectedService]);

  const services = [
    {
      id: 1,
      title: "Saúde da Mulher",
      description:
        "Abordagem nutricional estruturada para mulheres em diferentes fases da vida.",
      details:
        "Abordagem nutricional estruturada para mulheres em diferentes fases da vida, considerando alterações hormonais, impactos metabólicos e inflamatórios, e mudanças na composição corporal.",
    },
    {
      id: 2,
      title: "Metabolismo",
      description:
        "Planejamento nutricional direcionado à redução de gordura, recomposição corporal e suporte à hipertrofia.",
      details:
        "Planejamento nutricional direcionado à redução de gordura, recomposição corporal e suporte à hipertrofia, com foco na preservação e desenvolvimento de massa magra, otimização metabólica e organização alimentar sustentável.",
    },
    {
      id: 3,
      title: "Obesidade",
      description:
        "Conduta nutricional para mulheres em tratamento clínico da obesidade, incluindo o uso de medicamentos injetáveis.",
      details:
        "Conduta nutricional para mulheres em tratamento clínico da obesidade, incluindo o uso de medicamentos injetáveis, como os análogos de GLP-1, com foco na preservação de massa magra, adequação proteica e manutenção do equilíbrio metabólico.",
    },
  ];

  return (
    <section id="services" className="section">
      <div className="container">
        <h2 className="section-title">Áreas de Atuação</h2>

        <div className="services-grid">
          {services.map((service, index) => {
            const Icon = icons[index];
            return (
              <button
                type="button"
                key={service.id}
                className="service-card"
                onClick={() => setSelectedService(service)}
              >
                <span className="service-icon" aria-hidden="true">
                  <Icon />
                </span>
                <span className="service-title">{service.title}</span>
                <span className="service-description">
                  {service.description}
                </span>
                <span className="service-more">Ler mais &rarr;</span>
              </button>
            );
          })}
        </div>
        <dialog
          ref={dialogRef}
          className="modal-content"
          aria-labelledby="service-dialog-title"
          onClose={() => setSelectedService(null)}
          onClick={(event) => {
            if (event.target === event.currentTarget) {
              const bounds = event.currentTarget.getBoundingClientRect();
              if (
                event.clientX < bounds.left ||
                event.clientX > bounds.right ||
                event.clientY < bounds.top ||
                event.clientY > bounds.bottom
              )
                setSelectedService(null);
            }
          }}
        >
          <button
            type="button"
            className="modal-close"
            aria-label="Fechar detalhes"
            autoFocus
            onClick={() => setSelectedService(null)}
          >
            &times;
          </button>
          <h3 id="service-dialog-title" className="modal-title">
            {selectedService?.title}
          </h3>
          <p>{selectedService?.details}</p>
          <a
            href="#contact"
            className="cta-button"
            onClick={() => setSelectedService(null)}
          >
            Agendar este serviço
          </a>
        </dialog>
      </div>
    </section>
  );
}

export default Services;
