import { defineConfig } from 'vite'

export default defineConfig({
  // Base public path when served in development or production
  base: './',
  
  // Build configuration
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    // Generate manifest for better caching
    manifest: false,
    // Minify for production
    minify: 'terser',
    // Source maps for debugging (optional)
    sourcemap: false,
    rollupOptions: {
      input: {
        main: './index.html',
        about: './about.html',
        work: './work.html',
        project: './project.html',
        contact: './contact.html'
      }
    }
  },
  
  // Development server configuration
  server: {
    port: 3000,
    open: true,
    host: true
  },
  
  // Preview server configuration
  preview: {
    port: 3000,
    open: true,
    host: true
  }
})