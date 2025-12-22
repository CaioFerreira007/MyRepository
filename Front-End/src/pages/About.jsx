import "../styles/About.css";

function About() {
  return (
    <div className="about-container">
      <div className="about-hero">
        <div className="hero-content">
          <h1 className="hero-title">
            <span className="gradient-text">Minha História</span>
          </h1>
          <div className="hero-line"></div>
          <p className="hero-subtitle">Da curiosidade à profissão</p>
        </div>
      </div>

      <div className="about-content">
        <div className="story-section">
          <div className="story-card">
            <div className="card-icon">🎯</div>
            <h3>Início da Jornada</h3>
            <p>
              Meu nome é <strong>Caio Gustavo</strong>, nascido e criado em
              Duque de Caxias - RJ. Minha história com a tecnologia começou na
              adolescência quando peguei um computador velho e fui pesquisar no
              YouTube como consertá-lo. Desde então, nunca mais larguei essa
              vivência.
            </p>
          </div>

          <div className="story-card">
            <div className="card-icon">📚</div>
            <h3>Formação</h3>
            <p>
              Comecei a estudar em cursos de programação como{" "}
              <strong>DankiCode</strong>,<strong>RocketSeat</strong>,{" "}
              <strong>B7Web</strong> e outros. Iniciei com HTML, CSS e
              JavaScript, mas um divisor de águas foi descobrir que programação
              não era só isso.
            </p>
          </div>

          <div className="story-card">
            <div className="card-icon">🚀</div>
            <h3>Especialização</h3>
            <p>
              Comecei a focar em <strong>.NET utilizando C#</strong> e continuo
              avançando na programação Web. Iniciei meus estudos na{" "}
              <strong>Unicesumar - Engenharia de Software</strong> em 02/2025 e{" "}
              <strong>Técnico em Desenvolvimento de Sistemas</strong>
              na Firjan Senai Caxias em 08/2025.
            </p>
          </div>

          <div className="story-card">
            <div className="card-icon">💼</div>
            <h3>Experiência</h3>
            <p>
              Tenho uma base sólida com certificações e bagagem de estudos de
              1-2 anos! Me preparando para o mercado, desenvolvi meu primeiro
              projeto real: o<strong> Tártaro Delivery</strong>. Confesso que
              não foi fácil, demorei meses para concluir e noites acordado.
            </p>
          </div>

          <div className="story-card">
            <div className="card-icon">🎨</div>
            <h3>Portfólio</h3>
            <p>
              Meu segundo projeto real é este portfólio, focado em aumentar o
              engajamento do meu serviço e aprimorar minha proficiência na arte
              de programação. Cada projeto é uma oportunidade de aprender e
              crescer.
            </p>
          </div>

          <div className="story-card highlight">
            <div className="card-icon">⚡</div>
            <h3>Objetivo</h3>
            <p>
              Busco constantemente transformar desafios em soluções inovadoras,
              combinando tecnologia de ponta com criatividade para entregar
              projetos que fazem a diferença.
            </p>
          </div>
        </div>

        <div className="timeline">
          <h2 className="section-title">Linha do Tempo</h2>
          <div className="timeline-items">
            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <h4>Adolescência</h4>
                <p>
                  Primeiro contato com tecnologia - consertando computadores
                </p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <h4>Cursos Online</h4>
                <p>
                  DankiCode, RocketSeat, B7Web - Formação em desenvolvimento web
                </p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <h4>Especialização .NET</h4>
                <p>Foco em backend com C# e arquitetura de software</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <h4>2025 - Faculdade</h4>
                <p>Unicesumar - Engenharia de Software</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <h4>2025 - Técnico</h4>
                <p>Firjan Senai - Desenvolvimento de Sistemas</p>
              </div>
            </div>
            <div className="timeline-item active">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <h4>Projetos Reais</h4>
                <p>Tártaro Delivery e este Portfólio</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
