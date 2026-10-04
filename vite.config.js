import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',
    allowedHosts: ['192.168.1.215', '169.254.48.68', 'localhost', '127.0.0.1']
  },
  preview: {
    host: '0.0.0.0',
    allowedHosts: ['192.168.1.215', '169.254.48.68', 'localhost', '127.0.0.1']
  }
})
