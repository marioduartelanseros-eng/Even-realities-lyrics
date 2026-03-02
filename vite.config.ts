import { defineConfig } from 'vite';

export default defineConfig({
  base: '/Even-realities-Lyrics/',
  root: '.',
  server: {
    port: 5173,
    host: true,
  },
  build: {
    outDir: 'dist',
  },
});
