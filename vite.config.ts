import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  base: '/Logis-SaaS-B2B-Industrial-Portal/',
  plugins: [
    react(),
    tailwindcss(),
  ],
})
