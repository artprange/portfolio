import { createFileRoute, redirect } from '@tanstack/react-router'

import { DEFAULT_LANGUAGE, isLanguage } from '../i18n/dictionary'

export const Route = createFileRoute('/')({
  beforeLoad: () => {
    // A raiz não tem conteúdo próprio: ela escolhe um idioma e redireciona.
    // A preferência do navegador decide, com o inglês como padrão.
    const preferred = navigator.languages
      .map((tag) => tag.split('-')[0])
      .find(isLanguage)

    throw redirect({
      to: '/$lang',
      params: { lang: preferred ?? DEFAULT_LANGUAGE },
      replace: true,
    })
  },
})
