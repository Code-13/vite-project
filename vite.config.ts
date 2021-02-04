/*
 * @Author       : code13
 * @Date         : 2021-02-04 14:33:01
 * @LastEditTime : 2021-02-04 15:39:56
 * @LastEditors  : code13
 * @Description  : vite.config.ts
 * @FilePath     : \vite.config.ts
 * @https://github.com/Code-13
 */
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'

import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), vueJsx()],
  alias: {
    '@': path.resolve(__dirname, 'src')
  }
})
