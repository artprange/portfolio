import { createFileRoute, Outlet, redirect } from '@tanstack/react-router'

import { Header } from '../../components/header'
import { LayoutContainer } from '../../layouts/layoutContainer'
import {
  DEFAULT_LANGUAGE,
  isLanguage,
  type Language,
} from '../../i18n/dictionary'

export const Route = createFileRoute('/$lang')({
  /**
   * O segmento vem da URL, que o visitante pode editar. Validar aqui é o que
   * permite tipar `lang` como Language dali para baixo: tudo que passar por
   * este ponto é um idioma que existe no dicionário.
   */
  beforeLoad: ({ params }) => {
    if (!isLanguage(params.lang)) {
      throw redirect({
        to: '/$lang',
        params: { lang: DEFAULT_LANGUAGE },
        replace: true,
      })
    }
    return { lang: params.lang as Language }
  },
  component: LanguageLayout,
})

function LanguageLayout() {
  return (
    <LayoutContainer>
      <Header />
      <Outlet />
    </LayoutContainer>
  )
}
