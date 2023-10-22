/// <reference types="vite/client" />

import * as path from 'path'

import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'

const outRootDir = 'dist'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), dts({ outDir: `${outRootDir}/lib` })],
  css: {
    modules: {
      generateScopedName: (name, filename) => {
        const componentName = path
          .basename(filename.replace(/\?.*/, ''), '.module.scss')
          .toLowerCase()
        return `leaf-${componentName}-${name}`
      },
    },
  },
  build: {
    outDir: outRootDir,
    sourcemap: true,
    lib: {
      formats: ['es', 'cjs'],
      entry: path.resolve(__dirname, 'src/index.ts'),
      name: 'react-leaf-core',
      fileName: (format) => `${format}/index.js`,
    },
    rollupOptions: {
      external: ['react', 'react/jsx-runtime'],
      output: {
        globals: {
          react: 'React',
          'react/jsx-runtime': 'jsxRuntime',
        },
        assetFileNames: 'styles/index.[ext]',
      },
    },
  },
})
