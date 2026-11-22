import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import tailwindcss from '@tailwindcss/vite'
import svgLoader from 'vite-svg-loader'

export default defineConfig({
  // Относительный base: сборка работает и на username.github.io, и на username.github.io/repo/
  base: '/lashes-site/', // base: './',
  plugins: [vue(), tailwindcss(), svgLoader({ svgo: false })],
  resolve: {
    alias: { '@': fileURLToPath(new URL('./src', import.meta.url)) },
  },
  build: {
    // никакого base64 в бандле: все картинки — отдельные файлы
    assetsInlineLimit: 0,
  },
})
