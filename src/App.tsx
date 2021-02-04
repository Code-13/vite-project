/*
 * @Author       : code13
 * @Date         : 2021-02-04 16:47:38
 * @LastEditTime : 2021-02-04 16:48:14
 * @LastEditors  : code13
 * @Description  : App入口文件
 * @FilePath     : \src\App.tsx
 * @https://github.com/Code-13
 */

import { defineComponent } from 'vue'
import { RouterView } from 'vue-router'

export default defineComponent({
  name: 'App',
  setup() {
    return () => (
      <>
        <RouterView />
      </>
    )
  }
})
