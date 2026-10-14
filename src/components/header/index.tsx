import { Link } from '@tanstack/react-router'
import { HeaderContainer, LeftContainer } from './styles'
import { useTranslation } from '../../i18n/useTranslation'
import { LANGUAGES } from '../../i18n/dictionary'

export function Header() {
  const { t, lang } = useTranslation()
  return (
    <HeaderContainer>
      <Link
        className="brand"
        to="/$lang"
        params={{ lang }}
        aria-label="Arthur Phillip Prange — home"
      >
        <span>
          <strong>A</strong>rthur
        </span>{' '}
        <span>
          <strong>P</strong>hillip
        </span>{' '}
        <span>
          <strong>P</strong>range
        </span>
      </Link>
      <nav
        aria-label={lang === 'pt' ? 'Navegação principal' : 'Main navigation'}
      >
        <Link to="/$lang" params={{ lang }} activeOptions={{ exact: true }}>
          {t('nav.about')}
        </Link>
        <Link to="/$lang/projects" params={{ lang }}>
          {t('nav.projects')}
        </Link>
      </nav>
      <LeftContainer aria-label={lang === 'pt' ? 'Idioma' : 'Language'}>
        {LANGUAGES.map((code) => (
          <Link
            key={code}
            to="."
            params={{ lang: code }}
            aria-label={t(code === 'pt' ? 'nav.portuguese' : 'nav.english')}
            aria-current={lang === code ? 'true' : undefined}
          >
            {code.toUpperCase()}
          </Link>
        ))}
      </LeftContainer>
    </HeaderContainer>
  )
}
