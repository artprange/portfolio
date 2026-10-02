import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { tanstackRouter } from '@tanstack/router-plugin/vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    // Antes do plugin do React: gera o routeTree.gen.ts a partir de src/routes.
    tanstackRouter({ target: 'react', autoCodeSplitting: true }),
    react(),
  ],
})
