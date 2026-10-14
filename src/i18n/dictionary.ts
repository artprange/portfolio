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
    'Full stack developer building web applications. Explore',
  'about.intro.link': 'my work',
  'about.github': 'GitHub',
  'about.avatarAlt': 'Arthur Prange',

  'projects.title': 'Projects',
  'projects.subtitle':
    'Selected projects showing how I connect interfaces, API contracts and application logic. Explore the live demos and source code.',
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
    'Desenvolvedor full stack construindo aplicações web. Conheça',
  'about.intro.link': 'meu trabalho',
  'about.github': 'GitHub',
  'about.avatarAlt': 'Arthur Prange',

  'projects.title': 'Projetos',
  'projects.subtitle':
    'Projetos selecionados que mostram como conecto interfaces, contratos de API e lógica de aplicação. Explore as demonstrações e o código.',
  'projects.live': 'Ver no ar',
  'projects.code': 'Código',
  'projects.screenshotAlt': 'Captura de tela de',
} satisfies Record<TranslationKey, string>

export const dictionary: Record<Language, Record<TranslationKey, string>> = {
  en,
  pt,
}
