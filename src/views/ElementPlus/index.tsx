/*
 * @Author       : code13
 * @Date         : 2021-02-04 16:59:03
 * @LastEditTime : 2021-02-04 17:56:40
 * @LastEditors  : code13
 * @Description  : ElementPlus 试用
 * @FilePath     : \src\views\ElementPlus\index.tsx
 * @https://github.com/Code-13
 */

import { defineComponent } from 'vue'

import { ElButton } from 'element-plus'

export default defineComponent({
  name: 'ElementPlusTest',
  setup() {
    return () => (
      <>
        <el-button
          size="small"
          type="primary"
          autofocus="true"
          loading="true"
          circle="true"
        >
          这是一个按钮
        </el-button>
      </>
    )
  }
})
