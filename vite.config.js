import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/thembi-portfolio/', // 👈 IMPORTANT — must match your repo name
  build: {
    outDir: 'dist'
  }
})
