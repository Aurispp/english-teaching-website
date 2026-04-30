import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server: {
    port: 5175,
    fs: {
      strict: false
    },
    headers: {
      'Cache-Control': 'no-store',
    }
  },
  build: {
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, 'index.html'),
        talkthetalk: path.resolve(__dirname, 'talkthetalk/index.html'),
        clasesInglesCastelldefels: path.resolve(__dirname, 'clases-ingles-castelldefels/index.html'),
        inglesEmpresasCastelldefels: path.resolve(__dirname, 'ingles-empresas-castelldefels/index.html'),
      },
      output: {
        assetFileNames: (assetInfo) => {
          // Keep original names for favicon files
          if (assetInfo.name.match(/\.(ico|png|svg)$/)) {
            return '[name][extname]'
          }
          return 'assets/[name]-[hash][extname]'
        }
      }
    }
  }
})
