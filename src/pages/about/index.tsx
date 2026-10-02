import { Link } from '@tanstack/react-router'
import { SpeedInsights } from '@vercel/speed-insights/react'

import { AboutContainer, ImageContainer, TextContainer } from '../styles'
import { useTranslation } from '../../i18n/useTranslation'

const imgUrl = 'https://avatars.githubusercontent.com/u/104018176?v=4'

/**
 * Antes isto eram dois componentes, aboutEn e aboutBr, idênticos a menos de
 * quatro strings. O idioma agora vem da rota.
 */
export function About() {
  const { t, lang } = useTranslation()

  return (
    <AboutContainer>
      <SpeedInsights />
      <TextContainer>
        <h1>{t('about.greeting')}</h1>

        <h1>
          {t('about.intro.before')}{' '}
          <Link to="/$lang/projects" params={{ lang }}>
            <span>{t('about.intro.link')}</span>
          </Link>
          .
        </h1>
      </TextContainer>
      <ImageContainer>
        <img src={imgUrl} width={300} alt={t('about.avatarAlt')} />
        <a
          href="https://github.com/artprange"
          target="_blank"
          rel="noreferrer noopener"
          title={t('about.github')}
        >
          {t('about.github')}
        </a>
      </ImageContainer>
    </AboutContainer>
  )
}
