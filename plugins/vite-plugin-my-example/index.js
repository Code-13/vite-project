/*
 * @Author       : code13
 * @Date         : 2021-03-01 20:44:24
 * @LastEditTime : 2021-03-01 20:52:13
 * @LastEditors  : code13
 * @Description  : example for vite plugin
 * @FilePath     : \plugins\vite-plugin-my-example\index.js
 * @https://github.com/Code-13
 */

/* 
docs for vite plugin: https://vitejs.dev/guide/api-plugin.html
*/

export default function myExample() {
  return {
    name: 'my-example',
    resolveId(source) {
      if (source === 'virtual-module') {
        return source
      }
      return null
    },
    load(id) {
      if (id === 'virtual-module') {
        return 'export default "This is virtual!"'
      }
      return null
    }
  }
}
