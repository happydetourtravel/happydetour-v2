import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  assetsInclude: ['**/*.md'],
  ssgOptions: {
    includedRoutes(paths) {
      const skip = ['/login', '/join', '/verify', '/members']
      return paths.filter((path) => !skip.includes(path))
    },
  },
})
