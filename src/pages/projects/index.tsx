import { Intro, ProjectCard, ProjectGrid } from './styles'
import { projects } from './projects'
import { useTranslation } from '../../i18n/useTranslation'

export function Projects() {
  const { t, lang } = useTranslation()

  return (
    <>
      <Intro>
        <h1>{t('projects.title')}</h1>
        <p>{t('projects.subtitle')}</p>
      </Intro>

      <ProjectGrid>
        {projects.map((project) => (
          <ProjectCard
            key={project.title}
            className={project.featured ? 'featured' : undefined}
          >
            {/* <a>, não o Link do react-router: estes destinos são externos.
                target _blank para o visitante não perder o portfólio de vista. */}
            <a
              className="thumb"
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer noopener"
            >
              <img
                src={project.image}
                alt={`${t('projects.screenshotAlt')} ${project.title}`}
                loading="lazy"
              />
            </a>

            <div className="body">
              <h2>{project.title}</h2>
              <p>{project.description[lang]}</p>

              <ul className="stack">
                {project.stack.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>

              <div className="links">
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  {t('projects.live')} →
                </a>
                <a
                  href={project.repoUrl}
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  {t('projects.code')} →
                </a>
              </div>
            </div>
          </ProjectCard>
        ))}
      </ProjectGrid>
    </>
  )
}
