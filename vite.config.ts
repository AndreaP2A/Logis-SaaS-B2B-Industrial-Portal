import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  // Set base to your repository name for GitHub Pages: base: '/your-repo-name/'
  base: '/logis-b2b-portal/',
  plugins: [
    react(),
    tailwindcss(),
  ],
})
