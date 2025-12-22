import { useState } from "react";
import "../styles/Contact.css";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [formStatus, setFormStatus] = useState({
    submitting: false,
    submitted: false,
    error: false,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus({ submitting: true, submitted: false, error: false });

    setTimeout(() => {
      setFormStatus({ submitting: false, submitted: true, error: false });
      setFormData({ name: "", email: "", subject: "", message: "" });

      setTimeout(() => {
        setFormStatus({ submitting: false, submitted: false, error: false });
      }, 5000);
    }, 1500);
  };

  const contactInfo = [
    {
      icon: "📧",
      title: "Email",
      value: "caiogggustavo49@gmail.com",
      link: "mailto:caiogggustavo49@gmail.com",
      description: "Respondo em até 24 horas",
    },
    {
      icon: "📱",
      title: "WhatsApp",
      value: "(21) 988156436",
      link: "https://wa.me/5521988156436",
      description: "Disponível das 9h às 18h",
    },
    {
      icon: "📍",
      title: "Localização",
      value: "Duque de Caxias - RJ",
      link: null,
      description: "Atendimento presencial ou remoto",
    },
    {
      icon: "⏰",
      title: "Horário",
      value: "Seg - Sex, 9h - 18h",
      link: null,
      description: "Horário de Brasília (GMT-3)",
    },
  ];

  const socialLinks = [
    {
      icon: "💻",
      name: "GitHub",
      username: "@CaioFerreira007",
      url: "https://github.com/CaioFerreira007",
      color: "#00d9ff",
    },
    {
      icon: "💼",
      name: "LinkedIn",
      username: "Caio Gustavo",
      url: "https://www.linkedin.com/in/caio-ferreira-037820229/",
      color: "#9b59b6",
    },
  ];

  return (
    <div className="contact-container">
      <section className="contact-hero">
        <div className="hero-content">
          <h1 className="hero-title">
            <span className="gradient-text">Entre em Contato</span>
          </h1>
          <div className="hero-line"></div>
          <p className="hero-subtitle">
            Vamos transformar suas ideias em realidade digital
          </p>
        </div>
      </section>

      <div className="contact-content">
        <div className="contact-info-section">
          <h2 className="section-title">
            Informações de Contato
            <div className="title-underline"></div>
          </h2>
          <div className="contact-info-grid">
            {contactInfo.map((info, index) => (
              <div key={index} className="info-card">
                <div className="card-icon">{info.icon}</div>
                <h3>{info.title}</h3>
                {info.link ? (
                  <a
                    href={info.link}
                    target="_blank"
                    rel="noreferrer"
                    className="info-link"
                  >
                    {info.value}
                  </a>
                ) : (
                  <p className="info-value">{info.value}</p>
                )}
                <p className="info-description">{info.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="contact-form-section">
          <h2 className="section-title">
            Envie uma Mensagem
            <div className="title-underline"></div>
          </h2>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="name">Nome Completo</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Seu nome"
                  required
                  disabled={formStatus.submitting}
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="seu@email.com"
                  required
                  disabled={formStatus.submitting}
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="subject">Assunto</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Sobre o que você gostaria de falar?"
                required
                disabled={formStatus.submitting}
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Mensagem</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Descreva seu projeto ou dúvida..."
                rows="6"
                required
                disabled={formStatus.submitting}
              ></textarea>
            </div>

            <button
              type="submit"
              className="btn-submit"
              disabled={formStatus.submitting}
            >
              {formStatus.submitting ? (
                <>
                  <span className="spinner"></span>
                  Enviando...
                </>
              ) : (
                <>Enviar Mensagem</>
              )}
            </button>

            {formStatus.submitted && (
              <div className="success-message">
                <span className="success-icon">✅</span>
                Mensagem enviada com sucesso! Retornarei em breve.
              </div>
            )}

            {formStatus.error && (
              <div className="error-message">
                <span className="error-icon">❌</span>
                Erro ao enviar mensagem. Tente novamente.
              </div>
            )}
          </form>
        </div>

        {/* Social Links */}
        <div className="social-section">
          <h2 className="section-title">
            Redes Sociais
            <div className="title-underline"></div>
          </h2>
          <div className="social-links">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.url}
                target="_blank"
                rel="noreferrer"
                className="social-btn"
                style={{ "--social-color": social.color }}
              >
                <span className="social-icon">{social.icon}</span>
                <div className="social-info">
                  <span className="social-name">{social.name}</span>
                  <span className="social-username">{social.username}</span>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="cta-section">
          <div className="cta-card">
            <h3 className="cta-title">Pronto para começar seu projeto?</h3>
            <p className="cta-text">
              Estou disponível para trabalhos freelance e colaborações em
              projetos inovadores. Vamos conversar sobre como posso ajudar a
              tornar sua ideia realidade!
            </p>
            <div className="cta-features">
              <div className="feature-item">
                <span className="feature-icon">⚡</span>
                <span>Resposta Rápida</span>
              </div>
              <div className="feature-item">
                <span className="feature-icon">💼</span>
                <span>Profissionalismo</span>
              </div>
              <div className="feature-item">
                <span className="feature-icon">🎯</span>
                <span>Foco em Resultados</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
