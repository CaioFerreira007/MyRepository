import { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Home.css";
import Modal from "../components/Modal";

import htmlLogo from "../assets/html-5.png";
import cssLogo from "../assets/css-3.png";
import bootstrapLogo from "../assets/bootstrap.png";
import jsLogo from "../assets/js.png";
import reactLogo from "../assets/library.png";
import nodeLogo from "../assets/nodejs.png";
import csharpLogo from "../assets/c-sharp.png";
import dotnetLogo from "../assets/website.png";
import sqlserverLogo from "../assets/sql-server.png";
import mysqlLogo from "../assets/mysql.png";
import typescriptLogo from "../assets/typescript.png";
import projeto1 from "../assets/project1.png";

function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = {
    project1: {
      title: "Tártaro Delivery",
      image: projeto1,
      preview: "Plataforma completa de delivery para hamburgueria local...",
      description: `Plataforma de Delivery para Hamburgueria Local

Visão Geral
Desenvolvi uma plataforma completa de delivery voltada para uma hamburgueria local, com foco em eficiência operacional e experiência do usuário. O sistema integra funcionalidades como pedidos online, gestão de cardápio e sincronização automatizada com ferramentas administrativas.

Stack Tecnológica
- Backend: ASP.NET Core 8.0 com arquitetura em camadas
- Frontend: React 18 com Hooks e Context API
- Banco de Dados: SQL Server com Entity Framework Core
- Autenticação: JWT com suporte a Refresh Tokens
- Integrações: Google Sheets API e WhatsApp Business API

Segurança Implementada
- Hash de senhas com BCrypt
- Rate limiting contra ataques de força bruta
- Headers de segurança (HSTS, CSP, X-Frame-Options)
- Validações robustas no frontend e backend
- Middleware de segurança customizado

Destaques do Projeto
- Carrinho persistente por usuário
- Sincronização automática de pedidos com Google Sheets
- Interface responsiva com Bootstrap e animações CSS
- Gerenciamento inteligente de horários de funcionamento
- Upload otimizado de imagens de produtos
- Recuperação de senha via e-mail

Desafios Superados
- Autenticação stateless com refresh tokens
- Sincronização bidirecional com Google Sheets
- Gerenciamento complexo de estado no frontend
- Otimização de queries para alta performance
- Deploy com pipeline CI/CD

Principais Aprendizados
- A importância de uma arquitetura bem planejada desde o início
- Testes automatizados economizam tempo e recursos
- Segurança deve ser prioridade desde o primeiro dia
- Documentação clara facilita manutenção e escalabilidade
- Comunicação efetiva é essencial em projetos reais`,
      techStack: [
        "React",
        "JavaScript",
        "Bootstrap",
        "C#",
        "ASP.NET Core",
        "Entity Framework",
        "SQL Server",
      ],
      liveLink: "https://tartarodelivery.com.br",
      githubLink: "https://github.com/CaioFerreira007/T-rtaroDelivery",
    },
  };

  const openModal = (projectId) => {
    setSelectedProject(projects[projectId]);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  return (
    <>
      <main className="main-content">
        {/* Hero Section */}
        <section className="hero">
          <div className="hero-content">
            <div className="hero-text">
              <h1 className="hero-title">
                <span className="gradient-text">Desenvolvedor</span>
                <br />
                Full Stack
              </h1>
              <p className="hero-subtitle">
                Transformo ideias em soluções tecnológicas escaláveis e
                eficientes. Especializado em criar experiências digitais
                modernas e de alta performance.
              </p>
              <div className="cta-buttons">
                <Link to="/contact" className="btn btn-primary">
                  Entre em Contato
                </Link>
                <a href="#projetos" className="btn btn-secondary">
                  Ver Projetos
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Stacks Section */}
        <section className="stacks" id="stacks">
          <h2 className="section-title">
            Minhas Tecnologias
            <div className="title-underline"></div>
          </h2>

          <div className="stack-categories">
            <div className="stack-category">
              <h3 className="category-title">Frontend</h3>
              <ul className="stack-grid">
                <li className="stack-item">
                  <img src={htmlLogo} alt="HTML Logo" />
                  <span>HTML</span>
                </li>
                <li className="stack-item">
                  <img src={cssLogo} alt="CSS Logo" />
                  <span>CSS</span>
                </li>
                <li className="stack-item">
                  <img src={bootstrapLogo} alt="Bootstrap Logo" />
                  <span>Bootstrap</span>
                </li>
                <li className="stack-item">
                  <img src={jsLogo} alt="JavaScript Logo" />
                  <span>JavaScript</span>
                </li>
                <li className="stack-item">
                  <img src={typescriptLogo} alt="TypeScript Logo" />
                  <span>TypeScript</span>
                </li>
                <li className="stack-item">
                  <img src={reactLogo} alt="React Logo" />
                  <span>React</span>
                </li>
              </ul>
            </div>

            <div className="stack-category">
              <h3 className="category-title">Backend</h3>
              <ul className="stack-grid">
                <li className="stack-item">
                  <img src={nodeLogo} alt="Node.js Logo" />
                  <span>Node.js</span>
                </li>
                <li className="stack-item">
                  <img src={csharpLogo} alt="C# Logo" />
                  <span>C#</span>
                </li>
                <li className="stack-item">
                  <img src={dotnetLogo} alt=".Net Logo" />
                  <span>.NET</span>
                </li>
              </ul>
            </div>

            <div className="stack-category">
              <h3 className="category-title">Database</h3>
              <ul className="stack-grid">
                <li className="stack-item">
                  <img src={sqlserverLogo} alt="SQL Server Logo" />
                  <span>SQL Server</span>
                </li>
                <li className="stack-item">
                  <img src={mysqlLogo} alt="MySQL Logo" />
                  <span>MySQL</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section className="section projects-section" id="projetos">
          <h2 className="section-title">
            Meus Projetos
            <div className="title-underline"></div>
          </h2>

          <div className="projects-grid">
            {Object.keys(projects).map((projectId) => {
              const project = projects[projectId];
              return (
                <article key={projectId} className="project-card">
                  <div className="project-image-wrapper">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="project-image"
                    />
                    <div className="project-overlay">
                      <a
                        href={project.liveLink}
                        target="_blank"
                        rel="noreferrer"
                        className="overlay-btn"
                      >
                        Ver Demo
                      </a>
                    </div>
                  </div>

                  <div className="project-info">
                    <h3 className="project-title">{project.title}</h3>
                    <p className="project-preview">{project.preview}</p>

                    <div className="project-tags">
                      {project.techStack.slice(0, 4).map((tech, index) => (
                        <span key={index} className="tag">
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="project-actions">
                      <button
                        className="btn-details"
                        onClick={() => openModal(projectId)}
                      >
                        Ver Detalhes
                      </button>
                      <a
                        href={project.githubLink}
                        target="_blank"
                        rel="noreferrer"
                        className="btn-code"
                      >
                        Ver Código
                      </a>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </section>

        {/* Services Section */}
        <section className="jobs">
          <h2 className="section-title">
            Meus Serviços
            <div className="title-underline"></div>
          </h2>
          <div className="services-grid">
            <div className="service-card">
              <div className="service-icon"></div>
              <h3>Desenvolvimento Web</h3>
              <p>Aplicações web completas e responsivas</p>
            </div>
            <div className="service-card">
              <div className="service-icon"></div>
              <h3>Landing Pages</h3>
              <p>Páginas modernas e otimizadas para conversão</p>
            </div>
            <div className="service-card">
              <div className="service-icon"></div>
              <h3>APIs RESTful</h3>
              <p>Integração e desenvolvimento de APIs robustas</p>
            </div>
            <div className="service-card">
              <div className="service-icon"></div>
              <h3>Migração de Dados</h3>
              <p>Integração com Google Sheets e ferramentas de gestão</p>
            </div>
          </div>
        </section>
      </main>

      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        project={selectedProject}
      />

      <footer className="footer-section">
        <div className="footer-content">
          <span>&copy; 2025 Caio Gustavo - Full Stack Developer</span>
          <Link to="/contact" className="footer-link">
            Entre em contato
          </Link>
        </div>
      </footer>
    </>
  );
}

export default Home;
