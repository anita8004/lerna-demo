import { defineConfig } from 'vite'
import path from 'node:path'
import VueMacros from 'unplugin-vue-macros/vite'
import vue from '@vitejs/plugin-vue'
import VueSetupExtend from 'vite-plugin-vue-setup-extend'
import AutoImport from 'unplugin-auto-import/vite'
import { viteMockServe } from 'vite-plugin-mock'

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
    }),
    viteMockServe({
      mockPath: 'src/mock',
      enable: true
    }),
  ],
  resolve: {
    alias: {
      "@": path.resolve("src"),
    },
  },
})
