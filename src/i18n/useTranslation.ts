import { getRouteApi } from '@tanstack/react-router'

import { dictionary, type TranslationKey } from './dictionary'

const route = getRouteApi('/$lang')

/**
 * O idioma vem do contexto da rota, não dos params: `beforeLoad` em
 * routes/$lang/route.tsx já validou o segmento e o devolveu tipado como
 * Language. Por isso a busca no dicionário não precisa de fallback em
 * runtime — o TypeScript garante que a combinação idioma + chave existe.
 */
export function useTranslation() {
  const { lang } = route.useRouteContext()

  function t(key: TranslationKey): string {
    return dictionary[lang][key]
  }

  return { t, lang }
}
