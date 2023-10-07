import { defineConfig } from 'tsup'

export default defineConfig({
  entry: ['src/index.ts'],
  target: 'node10',
  minify: true,
  format: ['esm', 'cjs'],
  dts: true,
  clean: true,
  treeshake: true
})
