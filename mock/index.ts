/*
 * @Author       : code13
 * @Date         : 2021-02-04 20:00:52
 * @LastEditTime : 2021-02-04 20:00:52
 * @LastEditors  : code13
 * @Description  : Mock
 * @FilePath     : \mock\index.ts
 * @https://github.com/Code-13
 */

import { MockMethod } from 'vite-plugin-mock'

export default [
  {
    url: '/api/get/',
    method: 'get',
    response: ({ query }) => {
      console.log(query)

      return {
        code: 0,
        data: {
          name: 'vite'
        }
      }
    }
  }
] as MockMethod[]
