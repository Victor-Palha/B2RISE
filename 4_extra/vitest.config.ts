import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    globals: true,
    root: './',
    poolOptions: {
        threads: {
            singleThread: true,
            isolate: true
        }
    },
    fileParallelism: false
  }
})
