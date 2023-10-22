import react from '@vitejs/plugin-react'
import { defineConfig as defineViteConfig, mergeConfig } from 'vite'
// eslint-disable-next-line import/no-unresolved
import { defineConfig as defineVitestConfig } from 'vitest/config'

const viteConfig = defineViteConfig({
  plugins: [react()],
})

const vitestConfig = defineVitestConfig({
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './packages/react-leaf-core/src/setup-tests.ts',
    css: false,
    reporters: 'default',
    singleThread: true,
    coverage: {
      provider: 'v8',
      reporter: ['text', 'html'],
      include: ['packages/**/src/**/*.ts', 'packages/**/src/**/*.tsx'],
    },
  },
})

export default mergeConfig(viteConfig, vitestConfig)
