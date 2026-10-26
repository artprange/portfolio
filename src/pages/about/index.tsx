import { Link } from '@tanstack/react-router'
import { ArrowUpRight, ArrowRight, GithubLogo } from 'phosphor-react'
import { SpeedInsights } from '@vercel/speed-insights/react'
import { Home } from './styles'
import { useTranslation } from '../../i18n/useTranslation'
import { projects } from '../projects/projects'

const copy = {
  pt: {
    role: 'Desenvolvedor full stack',
    title: 'Da ideia ao produto.',
    accent: 'Em toda a stack.',
    intro:
      'Sou Arthur Phillip Prange, desenvolvedor full stack. Transformo ideias em aplicações web, conectando interfaces, APIs e dados com uma arquitetura pensada para evoluir.',
    work: 'Explorar projetos',
    selected: 'Trabalhos selecionados',
    detail: 'Produtos, integrações e código.',
    all: 'Todos os projetos',
    approach: 'Como eu construo',
    approachTitle: 'Uma visão completa da aplicação.',
    principles: [
      [
        '01',
        'Interfaces com propósito',
        'Traduzo necessidades do produto em interfaces responsivas e fluxos claros, conectados às regras de negócio.',
      ],
      [
        '02',
        'APIs e dados bem conectados',
        'Estruturo a comunicação entre interface, serviços e dados com contratos explícitos, validação e responsabilidades bem definidas.',
      ],
      [
        '03',
        'Arquitetura para evoluir',
        'Organizo as camadas para facilitar manutenção e testes, usando mocks para verificar integrações e explorar fluxos completos.',
      ],
    ],
    notes: [
      'Uma experiência de e-commerce que conecta catálogo, autenticação e pagamento por contratos independentes.',
      'Planejador de atividades com React e API GraphQL em Node.js, conectando previsões meteorológicas a recomendações explicáveis.',
    ],
    end: 'Explore as decisões por trás do produto.',
    endText:
      'Conheça como organizo interfaces, contratos de API e integrações nos repositórios dos projetos.',
    github: 'Visitar GitHub',
    footer: 'Arthur Phillip Prange · Full stack developer',
  },
  en: {
    role: 'Full stack developer',
    title: 'From idea to product.',
    accent: 'Across the stack.',
    intro:
      'I’m Arthur Phillip Prange, a full stack developer. I turn ideas into web applications, connecting interfaces, APIs and data through architecture designed to evolve.',
    work: 'Explore projects',
    selected: 'Selected work',
    detail: 'Products, integrations and code.',
    all: 'All projects',
    approach: 'How I build',
    approachTitle: 'A complete view of the application.',
    principles: [
      [
        '01',
        'Interfaces with purpose',
        'I translate product needs into responsive interfaces and clear flows, connected to the business rules behind them.',
      ],
      [
        '02',
        'Connected APIs and data',
        'I structure communication between interfaces, services and data with explicit contracts, validation and clear responsibilities.',
      ],
      [
        '03',
        'Architecture that can evolve',
        'I organize application layers for maintainability and testing, using mocks to verify integrations and explore complete flows.',
      ],
    ],
    notes: [
      'An e-commerce experience connecting catalog, authentication and payment through independent contracts.',
      'An activity planner with React and a Node.js GraphQL API, turning weather forecasts into explainable recommendations.',
    ],
    end: 'Explore the decisions behind the product.',
    endText:
      'See how I organize interfaces, API contracts and integrations in the project repositories.',
    github: 'Visit GitHub',
    footer: 'Arthur Phillip Prange · Full stack developer',
  },
}

export function About() {
  const { t, lang } = useTranslation()
  const c = copy[lang]
  return (
    <Home>
      <SpeedInsights />
      <section className="hero" aria-labelledby="home-title">
        <div className="hero-copy">
          <p className="eyebrow">
            <span />
            {c.role}
          </p>
          <h1 id="home-title">
            {c.title}
            <br />
            <em>{c.accent}</em>
          </h1>
          <p className="intro">{c.intro}</p>
          <div className="actions">
            <a className="primary" href="#selected-work">
              {c.work}
              <ArrowRight size={20} />
            </a>
            <a
              href="https://github.com/artprange"
              target="_blank"
              rel="noreferrer noopener"
            >
              <GithubLogo size={20} />
              GitHub
              <ArrowUpRight size={16} />
            </a>
          </div>
        </div>
        <div className="portrait">
          <img
            src="https://avatars.githubusercontent.com/u/104018176?v=4"
            alt={t('about.avatarAlt')}
            width={360}
            height={360}
          />
          <div className="portrait-caption">
            <span>Arthur Prange</span>
            <span>Full stack developer</span>
          </div>
        </div>
      </section>
      <section id="selected-work" className="work" aria-labelledby="work-title">
        <div className="section-heading">
          <div>
            <p className="eyebrow">{c.selected}</p>
            <h2 id="work-title">{c.detail}</h2>
          </div>
          <Link to="/$lang/projects" params={{ lang }}>
            {c.all}
            <ArrowUpRight size={20} />
          </Link>
        </div>
        <div className="project-list">
          {projects
            .filter(
              (project) =>
                project.title === 'Mark Paint Shop' ||
                project.liveUrl === 'https://weather.prange.dev/',
            )
            .map((project, i) => (
              <article className="project" key={project.title}>
                <a
                  className="project-image"
                  href={project.liveUrl}
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label={`${project.title} — ${t('projects.live')}`}
                >
                  <img
                    src={project.image}
                    alt={`${t('projects.screenshotAlt')} ${project.title}`}
                    loading="lazy"
                  />
                </a>
                <div className="project-info">
                  <span className="project-number">
                    0{i + 1} /{' '}
                    {project.title === 'Mark Paint Shop'
                      ? 'E-COMMERCE'
                      : 'FULL STACK APP'}
                  </span>
                  <h3>{project.title}</h3>
                  <p>{c.notes[i]}</p>
                  <ul>
                    {project.stack.slice(0, 4).map((tech) => (
                      <li key={tech}>{tech}</li>
                    ))}
                  </ul>
                  <div className="project-links">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      {t('projects.live')}
                      <ArrowUpRight size={18} />
                    </a>
                    <a
                      href={project.repoUrl}
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      {t('projects.code')}
                      <ArrowUpRight size={18} />
                    </a>
                  </div>
                </div>
              </article>
            ))}
        </div>
      </section>
      <section className="approach" aria-labelledby="approach-title">
        <p className="eyebrow">{c.approach}</p>
        <h2 id="approach-title">{c.approachTitle}</h2>
        <div className="principles">
          {c.principles.map(([number, title, text]) => (
            <article key={number}>
              <span>{number}</span>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>
      <section className="contact">
        <div>
          <h2>{c.end}</h2>
          <p>{c.endText}</p>
        </div>
        <a
          href="https://github.com/artprange"
          target="_blank"
          rel="noreferrer noopener"
        >
          {c.github}
          <ArrowUpRight size={22} />
        </a>
      </section>
      <footer>
        <span>© {new Date().getFullYear()} Arthur Prange</span>
        <span>{c.footer}</span>
      </footer>
    </Home>
  )
}
