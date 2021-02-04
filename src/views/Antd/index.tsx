/*
 * @Author       : code13
 * @Date         : 2021-02-04 17:40:35
 * @LastEditTime : 2021-02-04 17:56:48
 * @LastEditors  : code13
 * @Description  : Antd
 * @FilePath     : \src\views\Antd\index.tsx
 * @https://github.com/Code-13
 */

/**
 * ant-design-vue 可以完美提示 tsx 文件
 */

import { defineComponent } from 'vue'

import { Button } from 'ant-design-vue'

export default defineComponent({
  name: 'AntD',
  setup(props, { slots }) {
    console.log(props)

    console.log(slots)

    return () => {
      const loading = true

      return <Button type="primary" loading={loading} size="large"></Button>
    }
  }
})
