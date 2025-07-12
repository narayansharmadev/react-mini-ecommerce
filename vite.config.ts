import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { configDefaults } from 'vitest/config';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true, // ✅ for expect() to work without importing
    environment: 'jsdom',
    setupFiles: './src/components/setupTests.ts',
  },
})
