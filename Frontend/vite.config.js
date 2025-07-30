import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
<<<<<<< HEAD
import path from 'path'
=======
>>>>>>> parent of e73d713 (chore: update dependencies and add SVGR plugin for SVG handling)

export default defineConfig({
  plugins: [react()],
<<<<<<< HEAD
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@assets': path.resolve(__dirname, './src/assets')
    }
  },
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: true
  }
=======
>>>>>>> parent of e73d713 (chore: update dependencies and add SVGR plugin for SVG handling)
})
