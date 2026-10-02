import { createFileRoute, redirect } from '@tanstack/react-router'

export const Route = createFileRoute('/about-br')({
  /** A URL antiga da versão em português; mantida para não quebrar links. */
  beforeLoad: () => {
    throw redirect({ to: '/$lang', params: { lang: 'pt' }, replace: true })
  },
})
