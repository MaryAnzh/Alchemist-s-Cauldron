import path from 'node:path';
import { defineConfig } from 'vite';

export default defineConfig({
  base: '/',
  resolve: {
    tsconfigPaths: true,
    alias: {
      '@constants': path.resolve(import.meta.dirname, './src/constants'),
      '@types': path.resolve(import.meta.dirname, './src/types'),
      '@assets': path.resolve(import.meta.dirname, './src/assets'),
    },
  },
  optimizeDeps: {
    exclude: ['web-vitals'],
  },
});
