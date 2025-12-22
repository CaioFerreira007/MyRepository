import React from "react";
import "../styles/Modal.css";

function Modal({ isOpen, onClose, project }) {
  React.useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      window.addEventListener("keydown", handleEsc);
      document.body.style.overflow = "hidden";
    }

    return () => {
      window.removeEventListener("keydown", handleEsc);
      document.body.style.overflow = "auto";
    };
  }, [isOpen, onClose]);

  if (!isOpen || !project) return null;

  const handleOverlayClick = (e) => {
    if (e.target.className === "modal-overlay active") {
      onClose();
    }
  };

  return (
    <div className="modal-overlay active" onClick={handleOverlayClick}>
      <div className="modal-content">
        <button
          className="modal-close"
          onClick={onClose}
          aria-label="Fechar modal"
        >
          <span>&times;</span>
        </button>

        <div className="modal-header">
          <h2 className="modal-title">{project.title}</h2>
        </div>

        <div className="modal-body">
          <div className="modal-description">
            {project.description.split("\n\n").map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>

          {project.techStack && project.techStack.length > 0 && (
            <div className="modal-tech-stack">
              <h3 className="tech-title">
                <span className="tech-icon">🛠️</span>
                Tecnologias Utilizadas
              </h3>
              <div className="tech-tags">
                {project.techStack.map((tech, index) => (
                  <span key={index} className="tech-tag">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          )}

          <div className="modal-footer">
            {project.liveLink && (
              <a
                href={project.liveLink}
                target="_blank"
                rel="noreferrer"
                className="modal-btn primary"
              >
                <span className="btn-icon"></span>
                Ver Projeto ao Vivo
              </a>
            )}
            {project.githubLink && (
              <a
                href={project.githubLink}
                target="_blank"
                rel="noreferrer"
                className="modal-btn secondary"
              >
                <span className="btn-icon"></span>
                Ver Código no GitHub
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
