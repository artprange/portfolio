import markPaintShop from '../../assets/markPaintShop.webp'
import cafe from '../../assets/cafe.webp'
import crud from '../../assets/crud.webp'
import pomodoro from '../../assets/pomodoro.webp'
import tranceBook from '../../assets/tranceBook.webp'
import type { Language } from '../../i18n/dictionary'

/** Texto que existe nos dois idiomas. Faltar um é erro de compilação. */
type Localized = Record<Language, string>

export type Project = {
  title: string
  description: Localized
  stack: string[]
  image: string
  liveUrl: string
  repoUrl: string
  /** The first entry spans the full width — it is the showcase slot. */
  featured?: boolean
}

export const projects: Project[] = [
  {
    title: 'Mark Paint Shop',
    description: {
      en: 'Storefront for a custom automotive paint shop. Catalog filters live in the URL and are validated at the route boundary, so a filtered search is a shareable link. Data arrives through route loaders, and the catalog, auth and payment layers each sit behind a contract with both a real and a simulated implementation — which lets the whole app run with no credentials at all.',
      pt: 'Loja de uma oficina de pintura automotiva personalizada. Os filtros do catálogo vivem na URL e são validados na entrada da rota, então uma busca filtrada vira um link compartilhável. Os dados chegam por loaders de rota, e catálogo, autenticação e pagamento ficam atrás de contratos, cada um com uma implementação real e uma simulada — o que deixa a aplicação inteira rodar sem nenhuma credencial.',
    },
    stack: [
      'React 19',
      'TypeScript',
      'TanStack Router',
      'styled-components',
      'Vitest',
    ],
    image: markPaintShop,
    liveUrl: 'https://mark-paint-shop-ultra.vercel.app',
    repoUrl: 'https://github.com/artprange/mark-paint-shop-ultra',
    featured: true,
  },
  {
    title: 'Inventory UI',
    description: {
      en: 'Inventory CRUD with schema-validated forms and an API mocked through MSW, so the interface stays testable without depending on a live backend.',
      pt: 'CRUD de inventário com formulários validados por schema e API simulada com MSW, o que mantém a interface testável sem depender de um backend no ar.',
    },
    stack: ['React', 'TypeScript', 'React Hook Form', 'Zod', 'MSW'],
    image: crud,
    liveUrl: 'https://projedata-assessment.vercel.app/',
    repoUrl: 'https://github.com/artprange/projedata-assessment',
  },
  {
    title: 'Pomodoro Timer',
    description: {
      en: 'Focus-cycle timer with a session history. State runs through a reducer with Immer, and the forms are schema-validated.',
      pt: 'Timer de ciclos de foco com histórico de sessões. O estado passa por um reducer com Immer, e os formulários são validados por schema.',
    },
    stack: ['React', 'TypeScript', 'styled-components', 'Immer', 'Zod'],
    image: pomodoro,
    liveUrl: 'https://pomodoro-timer-delta-eight.vercel.app/',
    repoUrl: 'https://github.com/artprange/MBA-pomodoro',
  },
  {
    title: 'TranceBook',
    description: {
      en: 'Social media comment section with posts, replies and deletion — an exercise in component composition and derived state.',
      pt: 'Seção de comentários de rede social, com publicações, respostas e remoção — um exercício de composição de componentes e estado derivado.',
    },
    stack: ['React', 'TypeScript', 'date-fns'],
    image: tranceBook,
    liveUrl: 'https://trancebook-deployed.vercel.app/',
    repoUrl: 'https://github.com/artprange/trancebook_deployed',
  },
  {
    title: "Henrietta's Cafe",
    description: {
      en: 'Responsive cafe landing page, built without a framework — HTML and SCSS, focused on layout and typography.',
      pt: 'Landing page responsiva de uma cafeteria, feita sem framework — HTML e SCSS, com foco em layout e tipografia.',
    },
    stack: ['HTML', 'SCSS', 'CSS'],
    image: cafe,
    liveUrl: 'https://pop-menu-test.vercel.app',
    repoUrl: 'https://github.com/artprange/popMenuTest',
  },
]
