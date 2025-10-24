import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'node:path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
      '@components': resolve(__dirname, 'src/components'),
      '@canvas': resolve(__dirname, 'src/canvas'),
      '@elements': resolve(__dirname, 'src/elements'),
      '@hooks': resolve(__dirname, 'src/hooks'),
      '@layouts': resolve(__dirname, 'src/layouts'),
      '@lib': resolve(__dirname, 'src/lib'),
      '@pages': resolve(__dirname, 'src/pages'),
      '@state': resolve(__dirname, 'src/state'),
      '@test': resolve(__dirname, 'src/test'),
      '@utils': resolve(__dirname, 'src/utils')
    }
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/test/setup.ts',
    css: true,
    coverage: {
      provider: 'c8',
      reporter: ['text', 'lcov', 'html']
    }
  }
});
