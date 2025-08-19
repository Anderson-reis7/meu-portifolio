import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  base: '/meu-portifolio/', // 👈 igualzinho ao nome do repositório no GitHub
  plugins: [react(), tailwindcss],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})
