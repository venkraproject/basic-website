import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import socialRedirectsPlugin from './plugins/socialRedirects.js'

const base = '/venkra--basic-website/'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), socialRedirectsPlugin(base)],
  base,
})
