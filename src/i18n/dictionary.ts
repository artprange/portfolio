export const LANGUAGES = ['en', 'pt'] as const

export type Language = (typeof LANGUAGES)[number]

export const DEFAULT_LANGUAGE: Language = 'en'

export function isLanguage(value: unknown): value is Language {
  return LANGUAGES.includes(value as Language)
}

/**
 * O inglês é a referência: as chaves daqui definem o conjunto válido, e o
 * `satisfies` abaixo obriga os outros idiomas a cobrirem exatamente as
 * mesmas. Esquecer uma tradução vira erro de compilação, não string faltando
 * em produção.
 */
const en = {
  'nav.title': 'My portfolio',
  'nav.about': 'About',
  'nav.projects': 'Projects',
  'nav.english': 'English',
  'nav.portuguese': 'Português',

  'about.greeting': 'Hello there! I am Arthur,',
  'about.intro.before':
    'Working as a Developer for 3 years and here is a small compilation of',
  'about.intro.link': 'my work',
  'about.github': 'GitHub',
  'about.avatarAlt': 'Arthur Prange',

  'projects.title': 'Projects',
  'projects.subtitle':
    'Some of what I have built. Each one links to the live site and to the source.',
  'projects.live': 'Live site',
  'projects.code': 'Code',
  'projects.screenshotAlt': 'Screenshot of',
} as const

export type TranslationKey = keyof typeof en

const pt = {
  'nav.title': 'Meu portfólio',
  'nav.about': 'Sobre',
  'nav.projects': 'Projetos',
  'nav.english': 'English',
  'nav.portuguese': 'Português',

  'about.greeting': 'Olá! Sou o Arthur,',
  'about.intro.before':
    'Desenvolvedor Front-end há 3 anos e aqui está um pouco do',
  'about.intro.link': 'meu trabalho',
  'about.github': 'GitHub',
  'about.avatarAlt': 'Arthur Prange',

  'projects.title': 'Projetos',
  'projects.subtitle':
    'Um pouco do que já construí. Cada um leva ao site no ar e ao código.',
  'projects.live': 'Ver no ar',
  'projects.code': 'Código',
  'projects.screenshotAlt': 'Captura de tela de',
} satisfies Record<TranslationKey, string>

export const dictionary: Record<Language, Record<TranslationKey, string>> = {
  en,
  pt,
}
