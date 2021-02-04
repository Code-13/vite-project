/*
 * @Author       : code13
 * @Date         : 2021-02-04 14:33:01
 * @LastEditTime : 2021-02-04 17:39:54
 * @LastEditors  : code13
 * @Description  : 主入口文件
 * @FilePath     : \src\main.ts
 * @https://github.com/Code-13
 */
import { createApp } from 'vue'
// TypeScript error? Run VSCode command
// TypeScript: Select TypeScript version - > Use Workspace Version
import App from './App'
import './App.less'

import router from '@/router'

import ElementPlus from 'element-plus'
import 'element-plus/lib/theme-chalk/index.css'

import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'

createApp(App).use(router).use(ElementPlus).use(Antd).mount('#app')
