import fs from 'node:fs'
import { defineConfig } from 'tsup'

export default defineConfig({ entry: ['src/index.ts'], clean: true, dts: true })

process.on('beforeExit', (code) => {
  if (code === 0) {
    fs.copyFileSync('dist/index.d.cts', 'dist/index.d.ts')
    fs.writeFileSync('dist/index.js', `export * from "./index.cjs";\n`)
  }
})
