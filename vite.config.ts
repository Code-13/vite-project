/*
 * @Author       : code13
 * @Date         : 2021-02-04 14:33:01
 * @LastEditTime : 2021-03-01 21:04:45
 * @LastEditors  : code13
 * @Description  : vite.config.ts
 * @FilePath     : \vite.config.ts
 * @https://github.com/Code-13
 */
import { ConfigEnv, defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import { viteMockServe } from 'vite-plugin-mock'

import myExample from './plugins/vite-plugin-my-example/index'
import hookExample from './plugins/vite-plugins-my-hooks/index'

import path from 'path'

// https://vitejs.dev/config/

export default defineConfig(({ command }: ConfigEnv) => {
  return {
    plugins: [
      vue(),
      vueJsx(),
      viteMockServe({
        ignore: /^_/,
        mockPath: 'mock',
        watchFiles: true, // 修改更新
        localEnabled: command === 'serve'
      }),
      myExample(),
      hookExample()
    ],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src')
      }
    },
    css: {
      modules: {
        localsConvention: 'camelCase'
      }
    }
  }
})
