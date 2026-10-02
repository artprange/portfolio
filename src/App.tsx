import { ThemeProvider } from 'styled-components'
import { RouterProvider, createRouter } from '@tanstack/react-router'

import { defaultTheme } from './styles/default'
import { GlobalStyle } from './styles/global'
import { routeTree } from './routeTree.gen'

const router = createRouter({ routeTree, defaultPreload: 'intent' })

// É esta declaração que dá type-safety a cada <Link to="..."> da aplicação.
declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <RouterProvider router={router} />
      <GlobalStyle />
    </ThemeProvider>
  )
}
