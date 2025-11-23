import React from "react";
import "../styles/Modal.css";

function Modal({ isOpen, onClose, project }) {
  React.useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    // Adiciona o listener quando o modal abre
    if (isOpen) {
      window.addEventListener("keydown", handleEsc);
      document.body.style.overflow = "hidden"; // Remove scroll da página
    }

    // Cleanup: remove o listener quando o modal fecha
    return () => {
      window.removeEventListener("keydown", handleEsc);
      document.body.style.overflow = "auto"; // Restaura scroll
    };
  }, [isOpen, onClose]);

  if (!isOpen || !project) return null;

  // Função para fechar ao clicar no overlay (fundo escuro)
  const handleOverlayClick = (e) => {
    // Se clicar exatamente no overlay (não na modal-content)
    if (e.target.className === "modal active") {
      onClose();
    }
  };

  return (
    <div className="modal active" onClick={handleOverlayClick}>
      <div className="modal-content">
        <button className="close-btn" onClick={onClose}>
          &times;
        </button>

        <div className="modal-body">
          <h2 className="modal-title">{project.title}</h2>

          <p className="modal-description">{project.description}</p>

          {project.techStack && project.techStack.length > 0 && (
            <div className="tech-stack">
              <h3>Tecnologias Utilizadas</h3>
              <div className="tech-tags">
                {project.techStack.map((tech, index) => (
                  <span key={index} className="tech-tag">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          )}

          <div className="modal-links">
            {project.liveLink && (
              <a
                href={project.liveLink}
                target="_blank"
                rel="noreferrer"
                className="link-btn primary"
              >
                Ver Projeto
              </a>
            )}
            {project.githubLink && (
              <a
                href={project.githubLink}
                target="_blank"
                rel="noreferrer"
                className="link-btn secondary"
              >
                Ver Código
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
