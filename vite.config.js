import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// GitHub Pages serves the site from /thembi-portfolio/; Netlify serves it from the root.
export default defineConfig({
  plugins: [react()],
  base: process.env.NETLIFY ? '/' : '/thembi-portfolio/',
  build: {
    outDir: 'dist'
  }
})
