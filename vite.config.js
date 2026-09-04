import { defineConfig, transformWithEsbuild } from 'vite'
import react from '@vitejs/plugin-react'

/* The shared kit ships JSX inside src/lib/motion.js. esbuild loads a .js file
   with the plain JS loader, so that file has to be run through the JSX loader
   explicitly before Rollup parses it. Vite's own documented recipe. */
const jsxInJs = {
  name: 'pack-jsx-in-js',
  enforce: 'pre',
  async transform(code, id) {
    if (!/src[\\/].*\.js$/.test(id.split('?')[0])) return null
    return transformWithEsbuild(code, id, { loader: 'jsx', jsx: 'automatic' })
  },
}

export default defineConfig({
  plugins: [jsxInJs, react()],
  base: '/',
  build: { outDir: 'dist', assetsInlineLimit: 2048, chunkSizeWarningLimit: 900 },
  server: { port: 5173, open: false },
})
