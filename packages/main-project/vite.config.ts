import { defineConfig } from 'vite'
import path from 'node:path'
import VueMacros from 'unplugin-vue-macros/vite'
import vue from '@vitejs/plugin-vue'
import VueSetupExtend from 'vite-plugin-vue-setup-extend'
import AutoImport from 'unplugin-auto-import/vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    VueMacros({
      plugins: {
        vue: vue()
      }
    }),
    VueSetupExtend(),
    AutoImport({
      dts: 'src/auto-imports.d.ts',
      imports: ['vue']
    })
  ],
  resolve: {
    alias: {
      "@": path.resolve("src"),
    },
  },
})
