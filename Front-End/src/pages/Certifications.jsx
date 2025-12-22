import { useState } from "react";
import "../styles/Certifications.css";

// Importação dos certificados da pasta assets/certifications
import backendjr from "../assets/certifications/backendjr.pdf";
import csharpCompleto from "../assets/certifications/cscompletonelioalves.pdf";
import fundamentosCsharp from "../assets/certifications/fundamentoscsbaltaio.jpeg";
import githubGit from "../assets/certifications/githubgit.pdf";
import htmlCss from "../assets/certifications/htmlcss.pdf";
import javascript from "../assets/certifications/javascript.pdf";
import logicaAlgoritmos from "../assets/certifications/logicacsnelioalves.jpg";

function Certifications() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [expandedCard, setExpandedCard] = useState(null);

  const certifications = [
    {
      id: 1,
      title: "Fundamentos do C#",
      institution: "Balta.io",
      date: "Jul 2025",
      duration: "12h",
      badge: "🔷",
      category: "backend",
      level: "Fundamentos",
      color: "#8b5cf6",
      skills: [
        "Sintaxe e estrutura do C#",
        "Tipos de dados e variáveis",
        "Estruturas de controle",
        "Conceitos fundamentais de .NET",
      ],
      description:
        "Curso introdutório completo à linguagem C#, abordando os fundamentos essenciais para desenvolvimento com .NET. Exploração de sintaxe, tipos de dados, estruturas de controle e conceitos base da plataforma .NET Framework.",
      certificateUrl: fundamentosCsharp,
      verified: true,
    },
    {
      id: 2,
      title: "HTML e CSS",
      institution: "RocketSeat",
      date: "Abr 2024",
      duration: "12h",
      badge: "🎨",
      category: "frontend",
      level: "Fundamentos",
      color: "#00d9ff",
      skills: [
        "Estrutura semântica HTML5",
        "Seletores e propriedades CSS",
        "Flexbox e Grid Layout",
        "Responsividade e acessibilidade",
        "Animações CSS",
      ],
      description:
        "Formação completa em HTML5 e CSS3 moderno, com foco em semântica, acessibilidade e design responsivo. Domínio de técnicas avançadas de layout com Flexbox e Grid, criação de animações fluidas e desenvolvimento de interfaces web profissionais.",
      certificateUrl: htmlCss,
      verified: true,
    },
    {
      id: 3,
      title: "Git e Github Básico",
      institution: "RocketSeat",
      date: "Mai 2024",
      duration: "2h",
      badge: "🔀",
      category: "tools",
      level: "Básico",
      color: "#9b59b6",
      skills: [
        "Controle de versão com Git",
        "Comandos Git essenciais",
        "Repositórios remotos no GitHub",
        "Workflows de colaboração",
      ],
      description:
        "Introdução prática ao Git e GitHub, cobrindo sistemas de controle de versão, comandos fundamentais e workflows de colaboração. Aprendizado de boas práticas para gerenciamento de código, criação de repositórios e trabalho em equipe.",
      certificateUrl: githubGit,
      verified: true,
    },
    {
      id: 4,
      title: "JavaScript",
      institution: "RocketSeat",
      date: "Abr 2024",
      duration: "18h",
      badge: "⚡",
      category: "frontend",
      level: "Intermediário",
      color: "#00d9ff",
      skills: [
        "JavaScript moderno (ES6+)",
        "Manipulação do DOM",
        "Programação Orientada a Objetos",
        "Assincronismo e Promises",
        "APIs e requisições HTTP",
        "Clean Code",
      ],
      description:
        "Curso aprofundado de JavaScript moderno, explorando desde fundamentos até conceitos avançados. Domínio de ES6+, manipulação eficiente do DOM, POO, assincronismo, consumo de APIs e aplicação de princípios de Clean Code para desenvolvimento de aplicações web robustas.",
      certificateUrl: javascript,
      verified: true,
    },
    {
      id: 5,
      title: "Backend Jr.",
      institution: "RocketSeat",
      date: "Jul 2024",
      duration: "8h",
      badge: "🚀",
      category: "backend",
      level: "Júnior",
      color: "#9b59b6",
      skills: [
        "Criação de APIs REST",
        "Node.js e Express",
        "Bancos de dados SQL",
        "Middlewares e autenticação",
        "Criptografia de dados",
        "Tratamento de erros",
      ],
      description:
        "Formação prática em desenvolvimento backend com Node.js, focando na construção de APIs RESTful escaláveis. Implementação de autenticação, integração com bancos de dados relacionais, aplicação de middlewares e técnicas de segurança como criptografia e tratamento robusto de erros.",
      certificateUrl: backendjr,
      verified: true,
    },
    {
      id: 6,
      title: "Algoritmos e Lógica de Programação",
      institution: "Udemy",
      date: "Mai 2025",
      duration: "30.5h",
      badge: "🧮",
      category: "fundamentals",
      level: "Completo",
      color: "#8b5cf6",
      skills: [
        "Lógica de programação",
        "Estruturas de dados",
        "Algoritmos de ordenação",
        "Complexidade computacional",
        "Resolução de problemas",
      ],
      description:
        "Curso abrangente de algoritmos e lógica de programação, desenvolvendo pensamento computacional sólido. Estudo detalhado de estruturas de dados fundamentais, algoritmos clássicos, análise de complexidade e técnicas avançadas de resolução de problemas algorítmicos.",
      certificateUrl: logicaAlgoritmos,
      verified: true,
    },
    {
      id: 7,
      title: "C# COMPLETO - POO + Projetos",
      institution: "Udemy",
      date: "Jul 2025",
      duration: "38h",
      badge: "🏆",
      category: "backend",
      level: "Avançado",
      color: "#00d9ff",
      skills: [
        "Programação Orientada a Objetos",
        "SOLID e Design Patterns",
        "Entity Framework Core",
        "ASP.NET Core avançado",
        "Arquitetura em camadas",
        "Desenvolvimento de projetos reais",
      ],
      description:
        "Formação completa e avançada em C# com forte ênfase em Programação Orientada a Objetos e desenvolvimento de projetos práticos. Aprofundamento em princípios SOLID, padrões de projeto, Entity Framework, ASP.NET Core e arquitetura de software escalável com projetos do mundo real.",
      certificateUrl: csharpCompleto,
      verified: true,
    },
  ];

  const categories = [
    { id: "all", label: "Todas", icon: "📚" },
    { id: "frontend", label: "Frontend", icon: "🎨" },
    { id: "backend", label: "Backend", icon: "⚙️" },
    { id: "fundamentals", label: "Fundamentos", icon: "🧮" },
    { id: "tools", label: "Ferramentas", icon: "🔧" },
  ];

  const filteredCerts =
    selectedCategory === "all"
      ? certifications
      : certifications.filter((cert) => cert.category === selectedCategory);

  const totalHours = certifications.reduce((sum, cert) => {
    return sum + parseFloat(cert.duration);
  }, 0);

  const toggleCard = (id) => {
    setExpandedCard(expandedCard === id ? null : id);
  };

  return (
    <div className="certifications-container">
      {/* Hero Section */}
      <section className="cert-hero">
        <div className="hero-content">
          <h1 className="hero-title">
            <span className="gradient-text">Certificações</span>
          </h1>
          <div className="hero-line"></div>
          <p className="hero-subtitle">
            Minha jornada de aprendizado contínuo em tecnologia
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <div className="cert-stats">
        <div className="stat-card">
          <div className="stat-icon">📜</div>
          <h3>{certifications.length}</h3>
          <p>Certificações</p>
        </div>
        <div className="stat-card">
          <div className="stat-icon">⏱️</div>
          <h3>{totalHours}h+</h3>
          <p>Horas de Estudo</p>
        </div>
        <div className="stat-card">
          <div className="stat-icon">🎯</div>
          <h3>Full Stack</h3>
          <p>Especialização</p>
        </div>
        <div className="stat-card">
          <div className="stat-icon">✅</div>
          <h3>100%</h3>
          <p>Verificadas</p>
        </div>
      </div>

      {/* Category Filter */}
      <div className="cert-categories">
        {categories.map((cat) => (
          <button
            key={cat.id}
            className={`category-btn ${
              selectedCategory === cat.id ? "active" : ""
            }`}
            onClick={() => setSelectedCategory(cat.id)}
          >
            <span className="cat-icon">{cat.icon}</span>
            {cat.label}
          </button>
        ))}
      </div>

      {/* Certifications Grid */}
      <div className="certifications-grid">
        {filteredCerts.map((cert) => (
          <article
            key={cert.id}
            className={`cert-card ${
              expandedCard === cert.id ? "expanded" : ""
            }`}
            style={{ "--cert-color": cert.color }}
          >
            <div className="cert-header">
              <span className="cert-badge" style={{ fontSize: "3rem" }}>
                {cert.badge}
              </span>
              <div className="cert-verified">
                {cert.verified && (
                  <span
                    className="verified-badge"
                    title="Certificado Verificado"
                  >
                    ✓ Verificado
                  </span>
                )}
              </div>
            </div>

            <div className="cert-content">
              <div className="cert-meta">
                <h3 className="cert-title">{cert.title}</h3>
                <p className="cert-institution">
                  <span className="institution-icon">🏛️</span>
                  {cert.institution}
                </p>
                <div className="cert-level-badge">{cert.level}</div>
              </div>

              <div className="cert-info">
                <span className="info-item">
                  <span className="info-icon">📅</span>
                  {cert.date}
                </span>
                <span className="info-item">
                  <span className="info-icon">⏱️</span>
                  {cert.duration}
                </span>
              </div>

              <p className="cert-description">{cert.description}</p>

              <div className="cert-skills">
                <h4 className="skills-title">
                  <span className="skills-icon">🛠️</span>
                  Competências Adquiridas
                </h4>
                <ul className="skills-list">
                  {cert.skills.map((skill, index) => (
                    <li key={index} className="skill-item">
                      <span className="skill-check">✓</span>
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="cert-actions">
                <button
                  className="btn-expand"
                  onClick={() => toggleCard(cert.id)}
                >
                  {expandedCard === cert.id ? "Ver Menos" : "Ver Mais"}
                  <span className="expand-icon">
                    {expandedCard === cert.id ? "▲" : "▼"}
                  </span>
                </button>
                <a
                  href={cert.certificateUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-certificate"
                >
                  <span className="btn-icon">📄</span>
                  Ver Certificado
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* Timeline Summary */}
      <section className="cert-timeline">
        <h2 className="section-title">
          Linha do Tempo
          <div className="title-underline"></div>
        </h2>
        <div className="timeline-container">
          {certifications
            .sort((a, b) => new Date(b.date) - new Date(a.date))
            .map((cert) => (
              <div key={cert.id} className="timeline-item">
                <div className="timeline-dot"></div>
                <div className="timeline-content">
                  <span className="timeline-date">{cert.date}</span>
                  <h4>{cert.title}</h4>
                  <p>{cert.institution}</p>
                  <span className="timeline-duration">{cert.duration}</span>
                </div>
              </div>
            ))}
        </div>
      </section>
    </div>
  );
}

export default Certifications;
