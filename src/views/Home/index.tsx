/*
 * @Author       : code13
 * @Date         : 2021-02-04 16:43:06
 * @LastEditTime : 2021-02-04 16:51:55
 * @LastEditors  : code13
 * @Description  : Home
 * @FilePath     : \src\views\Home\index.tsx
 * @https://github.com/Code-13
 */

import { defineComponent } from 'vue'

import HelloWorld from '@/components/HelloWorld.vue'

import logo from '@/assets/logo.png'

export default defineComponent({
  name: 'Home',
  setup() {
    return () => (
      <>
        <img src={logo} />
        <HelloWorld msg="Hello Vue 3 + TypeScript + Vite" />
      </>
    )
  }
})
