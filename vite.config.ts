import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/uploads': {
        target: 'http://localhost:8080/uploads',
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace(/^\/uploads/, ''),
      },
    },
  },
});

