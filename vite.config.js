import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from 'vite-plugin-svgr'
import socialRedirectsPlugin from './plugins/socialRedirects.js'

const base = process.env.VITE_BASE || '/'

// https://vite.dev/config/
export default defineConfig({
  plugins: [svgr(), react(), socialRedirectsPlugin(base)],
  base,
})
