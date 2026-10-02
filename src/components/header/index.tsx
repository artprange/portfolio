import { BracketsAngle, UserSquare } from 'phosphor-react'
import { Link } from '@tanstack/react-router'

import { HeaderContainer, LeftContainer } from './styles'
import brFlag from '../../assets/brFlag.webp'
import ukFlag from '../../assets/ukFlag.webp'
import { useTranslation } from '../../i18n/useTranslation'
import { LANGUAGES } from '../../i18n/dictionary'

const FLAGS = {
  en: { src: ukFlag, labelKey: 'nav.english' },
  pt: { src: brFlag, labelKey: 'nav.portuguese' },
} as const

export function Header() {
  const { t, lang } = useTranslation()

  return (
    <HeaderContainer>
      <LeftContainer>
        <h1>{t('nav.title')}</h1>
        {LANGUAGES.map((code) => {
          const flag = FLAGS[code]
          return (
            /* A troca de idioma mantém a página: `to="."` resolve para a rota
               atual, então quem está em /en/projects vai para /pt/projects em
               vez de voltar para a home. */
            <Link
              key={code}
              to="."
              params={{ lang: code }}
              aria-current={lang === code ? 'true' : undefined}
            >
              <img src={flag.src} alt={t(flag.labelKey)} width={45} />
            </Link>
          )
        })}
      </LeftContainer>

      <nav>
        <Link to="/$lang" params={{ lang }} title={t('nav.about')}>
          <UserSquare size={24} />
        </Link>
        <Link to="/$lang/projects" params={{ lang }} title={t('nav.projects')}>
          <BracketsAngle size={24} />
        </Link>
      </nav>
    </HeaderContainer>
  )
}
