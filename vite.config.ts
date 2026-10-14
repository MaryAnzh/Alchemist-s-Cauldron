import path from 'node:path';
import { defineConfig } from 'vite';

export default defineConfig({
  base: '/Alchemist-s-Cauldron/',
  resolve: {
    tsconfigPaths: true,
    alias: {
      '@constants': path.resolve(import.meta.dirname, './src/constants'),
      '@types': path.resolve(import.meta.dirname, './src/types'),
      '@assets': path.resolve(import.meta.dirname, './src/assets'),
      '@ui': path.resolve(import.meta.dirname, './src/ui'),
      '@pages': path.resolve(import.meta.dirname, './src/pages'),
      '@store': path.resolve(import.meta.dirname, './src/store'),
    },
  },
  optimizeDeps: {
    exclude: ['web-vitals'],
  },
});
