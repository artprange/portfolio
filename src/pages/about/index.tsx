import { useRef, useState } from 'react'
import { Link } from '@tanstack/react-router'
import { ArrowUpRight, ArrowRight, ArrowLeft, GithubLogo } from 'phosphor-react'
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
    selected: 'Projetos',
    previous: 'Projeto anterior',
    next: 'Próximo projeto',
    carousel: 'Carrossel de projetos',
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
    selected: 'Projects',
    previous: 'Previous project',
    next: 'Next project',
    carousel: 'Project carousel',
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
  const track = useRef<HTMLDivElement>(null)
  const [activeProject, setActiveProject] = useState(0)
  const homeProjects = [...projects].sort((a, b) => {
    const priority = (title: string) =>
      title.startsWith('Out There') ? 1 : title === 'Mark Paint Shop' ? 0 : 2
    return priority(a.title) - priority(b.title)
  })

  function goToProject(index: number) {
    const container = track.current
    const slide = container?.children[index] as HTMLElement | undefined
    if (!container || !slide) return
    container.scrollTo({
      left: slide.offsetLeft - container.offsetLeft,
      behavior: 'instant',
    })
  }

  function updateActiveProject() {
    const container = track.current
    if (!container) return
    const slides = Array.from(container.children) as HTMLElement[]
    const nearest = slides.reduce(
      (best, slide, index) =>
        Math.abs(
          slide.offsetLeft - container.offsetLeft - container.scrollLeft,
        ) <
        Math.abs(
          slides[best].offsetLeft - container.offsetLeft - container.scrollLeft,
        )
          ? index
          : best,
      0,
    )
    setActiveProject(nearest)
  }
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
            <Link className="primary" to="/$lang/projects" params={{ lang }}>
              {c.work}
              <ArrowRight size={20} />
            </Link>
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
        <div
          className="project-list"
          id="project-carousel"
          ref={track}
          role="region"
          aria-label={c.carousel}
          tabIndex={0}
          onScroll={updateActiveProject}
          onKeyDown={(event) => {
            if (event.target !== event.currentTarget) return
            if (event.key === 'ArrowRight' || event.key === 'ArrowLeft') {
              event.preventDefault()
              goToProject(
                Math.max(
                  0,
                  Math.min(
                    homeProjects.length - 1,
                    activeProject + (event.key === 'ArrowRight' ? 1 : -1),
                  ),
                ),
              )
            }
          }}
        >
          {homeProjects.map((project, i) => (
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
                  0{i + 1} / {String(homeProjects.length).padStart(2, '0')}
                </span>
                <h3>{project.title}</h3>
                <p>{project.summary[lang]}</p>
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
        <div className="carousel-controls">
          <p aria-live="polite" aria-atomic="true">
            {activeProject + 1} / {homeProjects.length} ·{' '}
            {homeProjects[activeProject].title}
          </p>
          <div>
            <button
              type="button"
              aria-label={c.previous}
              aria-controls="project-carousel"
              disabled={activeProject === 0}
              onClick={() => goToProject(activeProject - 1)}
            >
              <ArrowLeft size={20} />
            </button>
            <button
              type="button"
              aria-label={c.next}
              aria-controls="project-carousel"
              disabled={activeProject === homeProjects.length - 1}
              onClick={() => goToProject(activeProject + 1)}
            >
              <ArrowRight size={20} />
            </button>
          </div>
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
