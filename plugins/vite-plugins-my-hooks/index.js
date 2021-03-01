/*
 * @Author       : code13
 * @Date         : 2021-03-01 20:56:18
 * @LastEditTime : 2021-03-01 21:03:54
 * @LastEditors  : code13
 * @Description  : hook
 * @FilePath     : \plugins\vite-plugins-my-hooks\index.js
 * @https://github.com/Code-13
 */

export default function hookExample() {
  return {
    name: 'hook-example',
    options(opts) {
      console.log('options', opts)
    },
    buildStart() {
      console.log('buildStart')
    },
    config(config) {
      console.log('config', config)
      return {}
    },
    configResolved(resolvedConfig) {
      console.log('configResolved', resolvedConfig)
    },
    configureServer() {
      console.log('configureServer')
    },
    transformIndexHtml(html) {
      console.log('transformIndexHtml')
      console.log(html)
      return html
    },
    resolveId(source) {
      if (source === 'hook-example') {
        console.log('resolveId', source)
        return source
      }
      return null
    },
    load(id) {
      if (id === 'hook-example') {
        console.log('load')
        return 'export default "This is hook-example"'
      }
      return null
    },
    transform(code, id) {
      if (id === 'hook-example') {
        console.log('transform')
      }
      return code
    }
  }
}
