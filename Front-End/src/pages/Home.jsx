import { useState } from "react";
import "../styles/Home.css";
import Modal from "../components/Modal";

import logo from "../assets/logo.jpg";
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
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const projects = {
    project1: {
      title: "Tártaro Delivery",
      image: projeto1,
      preview: "Plataforma completa de delivery para hamburgueria local...",
      description: `Plataforma de Delivery para Hamburgueria Local
Visão Geral
Desenvolvi uma plataforma completa de delivery voltada para uma hamburgueria local, com foco em eficiência operacional e experiência do usuário. O sistema integra funcionalidades como pedidos online, gestão de cardápio e sincronização automatizada com ferramentas administrativas.
Stack Tecnológica
• Backend: ASP.NET Core 8.0 com arquitetura em camadas
• Frontend: React 18 com Hooks e Context API
• Banco de Dados: SQL Server com Entity Framework Core
• Autenticação: JWT com suporte a Refresh Tokens
• Integrações: Google Sheets API e WhatsApp Business API
Segurança Implementada
• Hash de senhas com BCrypt
• Rate limiting contra ataques de força bruta
• Headers de segurança (HSTS, CSP, X-Frame-Options)
• Validações robustas no frontend e backend
• Middleware de segurança customizado
Destaques do Projeto
• Carrinho persistente por usuário
• Sincronização automática de pedidos com Google Sheets
• Interface responsiva com Bootstrap e animações CSS
• Gerenciamento inteligente de horários de funcionamento
• Upload otimizado de imagens de produtos
• Recuperação de senha via e-mail
Desafios Superados
• Autenticação stateless com refresh tokens
• Sincronização bidirecional com Google Sheets
• Gerenciamento complexo de estado no frontend
• Otimização de queries para alta performance
• Deploy com pipeline CI/CD
Principais Aprendizados
• A importância de uma arquitetura bem planejada desde o início
• Testes automatizados economizam tempo e recursos
• Segurança deve ser prioridade desde o primeiro dia
• Documentação clara facilita manutenção e escalabilidade
• Comunicação efetiva é essencial em projetos reais`,
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

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <header>
        <nav className="nav">
          <a href="/">
            <img className="logo" src={logo} alt="Logo" />
          </a>
          <div className="menu-toggle" onClick={toggleMenu}>
            {isMenuOpen ? (
              <span className="close-icon"> &#x2715; </span>
            ) : (
              <span className="open-icon"> &#9776; </span>
            )}
          </div>

          <ul className={isMenuOpen ? "active" : ""}>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
            <li>
              <a href="#">Certifications</a>
            </li>
          </ul>
        </nav>
      </header>

      <img
        className={`footer-logo ${isMenuOpen ? "active" : ""}`}
        src={logo}
        alt="Footer Logo"
      />

      <main className="main-content">
        <h1>Bem Vindos ao Meu Portfólio</h1>

        <p className="introduction">
          Sou um desenvolvedor Full Stack e ajudo a otimizar processos através
          de soluções tecnológicas eficientes e escaláveis.
        </p>

        <section className="stacks">
          <h3>Minhas Stacks</h3>
          <ul>
            <li>
              <img src={htmlLogo} alt="HTML Logo" />
              HTML
            </li>
            <li>
              <img src={cssLogo} alt="CSS Logo" />
              CSS
            </li>
            <li>
              <img src={bootstrapLogo} alt="Bootstrap Logo" />
              Bootstrap
            </li>
            <li>
              <img src={jsLogo} alt="JavaScript Logo" />
              JavaScript
            </li>
            <li>
              <img src={typescriptLogo} alt="TypeScript Logo" />
              TypeScript
            </li>
            <li>
              <img src={reactLogo} alt="React Logo" />
              React
            </li>
            <li>
              <img src={nodeLogo} alt="Node.js Logo" />
              Node.js
            </li>
            <li>
              <img src={csharpLogo} alt="C# Logo" />
              C#
            </li>
            <li>
              <img src={dotnetLogo} alt=".Net Logo" />
              .Net
            </li>
            <li>
              <img src={sqlserverLogo} alt="SQL Server Logo" />
              SQL Server
            </li>
            <li>
              <img src={mysqlLogo} alt="MySQL Logo" />
              MySQL
            </li>
          </ul>
        </section>

        <section className="section">
          <h2>Meus Projetos</h2>

          <div className="projects">
            {Object.keys(projects).map((projectId) => {
              const project = projects[projectId];
              return (
                <article key={projectId} className="project-image-container">
                  <a href={project.liveLink} target="_blank" rel="noreferrer">
                    <img src={project.image} alt={project.title} />
                  </a>

                  <div className="btn-modal">
                    <button onClick={() => openModal(projectId)}>
                      Ver Detalhes do Projeto
                    </button>
                  </div>
                </article>
              );
            })}
          </div>
        </section>

        <section className="jobs">
          <h2>Quais os Meus Serviços?</h2>
          <ul>
            <li>Desenvolvimento de Aplicações Web</li>
            <li>Criações de Landing Pages</li>
            <li>Implementação de API RESTful</li>
            <li>
              Migrar os Dados da Aplicação para Apps de Gestão de Tabelas ou
              Planilhas
            </li>
          </ul>
        </section>
      </main>

      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        project={selectedProject}
      />
      <footer className="footerSection">
        <span>&copy; 2023 Meu Portfólio. Todos os direitos reservados.</span>
        <a href="/contact">Entre em contato</a>
      </footer>
    </>
  );
}

export default Home;
