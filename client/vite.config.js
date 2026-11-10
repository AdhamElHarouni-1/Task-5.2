import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import helmet from 'helmet'
import csp from '../shared/csp.cjs'

const { cspDirectives } = csp

const applySecurityHeaders = helmet({
  contentSecurityPolicy: {
    directives: cspDirectives,
  },
})

const securityHeadersPlugin = {
  name: 'helmet-security-headers',
  configureServer(server) {
    server.middlewares.use(applySecurityHeaders)
  },
  configurePreviewServer(server) {
    server.middlewares.use(applySecurityHeaders)
  },
}

export default defineConfig({
  plugins: [react(), securityHeadersPlugin],
  server: {
    port: 5175
  }
})
