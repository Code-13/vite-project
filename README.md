# Vite Project

vite 官方文档地址: [English](https://vitejs.dev) [Chinese](https://cn.vitejs.dev)

## 新建项目

```shell
# 创建项目
yarn create @vitejs/app

# 选择模板时选择 vue-ts

# 进入项目
cd vite-project

# 按照依赖
yarn
```

## tsconfig.json

```json
{
  "compilerOptions": {
    "target": "esnext",
    "module": "esnext",
    "strict": true,
    "jsx": "preserve",
    "importHelpers": true,
    "moduleResolution": "node",
    "experimentalDecorators": true,
    "skipLibCheck": true,
    "esModuleInterop": true,
    "allowSyntheticDefaultImports": true,
    "sourceMap": true,
    "baseUrl": ".",
    "paths": {
      "@/*": ["src/*"]
    },
    "lib": ["esnext", "dom", "dom.iterable", "scripthost"]
  },
  "include": [
    "src/**/*.ts",
    "src/**/*.tsx",
    "src/**/*.vue",
    "tests/**/*.ts",
    "tests/**/*.tsx"
  ],
  "exclude": ["node_modules"]
}
```

## vite.config.ts

```ts
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue'
import path from 'path';

export default defineConfig({
  ...
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  }
  ...
});
```

## 添加 eslint 及 prettier

```shell
yarn add -D eslint eslint-plugin-vue prettier eslint-config-prettier eslint-plugin-prettier @typescript-eslint/parser @typescript-eslint/eslint-plugin
```

### .eslintrc.js

```js
module.exports = {
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@typescript-eslint/parser',
    ecmaVersion: 2020,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true
    }
  },
  extends: [
    'plugin:vue/vue3-essential',
    'plugin:@typescript-eslint/recommended',
    'prettier/@typescript-eslint',
    'plugin:prettier/recommended'
  ],
  rules: {
    '@typescript-eslint/ban-ts-ignore': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-var-requires': 'off',
    '@typescript-eslint/no-empty-function': 'off',
    'vue/custom-event-name-casing': 'off',
    'no-use-before-define': 'off',
    // 'no-use-before-define': [
    //   'error',
    //   {
    //     functions: false,
    //     classes: true,
    //   },
    // ],
    '@typescript-eslint/no-use-before-define': 'off',
    // '@typescript-eslint/no-use-before-define': [
    //   'error',
    //   {
    //     functions: false,
    //     classes: true,
    //   },
    // ],
    '@typescript-eslint/ban-ts-comment': 'off',
    '@typescript-eslint/ban-types': 'off',
    '@typescript-eslint/no-non-null-assertion': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        argsIgnorePattern: '^h$',
        varsIgnorePattern: '^h$'
      }
    ],
    'no-unused-vars': [
      'error',
      {
        argsIgnorePattern: '^h$',
        varsIgnorePattern: '^h$'
      }
    ],
    'space-before-function-paren': 'off',
    quotes: ['error', 'single'],
    'comma-dangle': ['error', 'never']
  }
}
```

## .prettierrc

```json
{
  "tabWidth": 2,
  "trailingComma": "none",
  "useTabs": false,
  "singleQuote": true,
  "semi": false
}
```

## pre-commit

```shell
yarn add -D husky lint-staged
```

```json
// 在 package.json中添加
...
"husky": {
  "hooks": {
    "pre-commit": "lint-staged"
  }
},
"lint-staged": {
  "src/**/*.{ts,tsx}": ["eslint --fix", "prettier"]
}
...
```

## 支持 jsx

安装 `@vitejs/plugin-vue-jsx` 让 jsx 组件支持 HMR

```shell
yarn add -D @vitejs/plugin-vue-jsx
```

// vite.config.ts

```ts
import path from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'

export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  }
  plugins: [vue(), vueJsx()]
})
```

## Vue-Router || Vuex

视情况添加 Vue-Router 和 Vuex

## Mock

```shell
yarn add -D mockjs vite-plugin-mock @types/mockjs
```

改写 vite.config.ts 如下：

```ts
import { ConfigEnv, defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import { viteMockServe } from 'vite-plugin-mock'

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
      })
    ],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src')
      }
    },
  }
}
```

/mock/index.ts

```ts
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
```

http://localhost:3000/api/get 检查链接查看即可

## 样式及图片模块

vite 支持模块样式，以 \*.module.scss 或者 \*.module.less 命名即可。

```tsx
import { defineComponent } from 'vue'

import style from './index.module.less'

export default defineComponent({
  setup() {
    return () => <div class={style['home-title']}>首页</div>
  }
})
```

```css
.home-title {
  color: #fff;
}
```

vite 的样式写法只支持 驼峰，修改支持如下：

修改 vite.config.ts ，vite 默认只支持驼峰 (style.homeTitle)

```ts
...
css: {
  modules: {
    localsConvention: 'camelCase' // 默认值 camelCaseOnly 只支持驼峰，修改为 camelCase 同时支持横线和驼峰
  }
}
```

## TSX 类型推断支持

- [ ] ElementPlus
- [x] Ant-design-vue
- [ ] Vant

## Vite Plugin 自定义

见 `/plugins/*` 目录
