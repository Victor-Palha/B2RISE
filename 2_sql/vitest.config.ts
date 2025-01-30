import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    globals: true,
    root: './',
    setupFiles: ['./src/tests/setup-tests.ts'],
    poolOptions: {
        threads: {
            singleThread: true,
            isolate: true
        }
    },
    fileParallelism: false
  }
})
