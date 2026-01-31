import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import socialRedirectsPlugin from './plugins/socialRedirects.js'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), socialRedirectsPlugin()],
})
