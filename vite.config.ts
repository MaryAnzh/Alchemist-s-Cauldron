import path from 'node:path';
import { defineConfig } from 'vitest/config';

export default defineConfig({
  base: '/Alchemist-s-Cauldron/',
  resolve: {
    tsconfigPaths: true,
    alias: {
      '@constants': path.resolve(import.meta.dirname, './src/constants'),
      '@types': path.resolve(import.meta.dirname, './src/types'),
      '@router': path.resolve(import.meta.dirname, './src/router'),
      '@assets': path.resolve(import.meta.dirname, './src/assets'),
      '@utils': path.resolve(import.meta.dirname, './src/utils'),
      '@ui': path.resolve(import.meta.dirname, './src/ui'),
      '@pages': path.resolve(import.meta.dirname, './src/pages'),
      '@store': path.resolve(import.meta.dirname, './src/store'),
    },
  },
  test: { include: ['src/**/*.test.ts'] },
  optimizeDeps: {
    exclude: ['web-vitals'],
  },
});
