- 安装 eslint `pnpm add -D eslint`
- 安装 VS Code Prettier 插件 `ext install dbaeumer.vscode-eslint`
- 初始化配置 `npx eslint --init`
  1. 新命令 `npm init @eslint/config`
  2. pnpm 新命令 `pnpm create @eslint/config`  
     ![*eslint--init.png*](/docs/eslint--init.png);
- 按提示生成初始化配置文件 [_.eslintrc.cjs_](/.eslintrc.cjs) 并安装对应依赖
- 配置忽略文件 [_.eslintignore_](/.eslintignore)
- 通过 vite 插件将 eslint 启用，打印校验信息到控制台

  1. 安装 vite 对应的 eslint 插件 [_vite-plugin-eslint_](https://github.com/gxmari007/vite-plugin-eslint) `pnpm add -D vite-plugin-eslint` （后续可能会尝试 [_@nabla/vite-plugin-eslint_](https://github.com/nabla/vite-plugin-eslint) 和 [_vite-plugin-linter_](https://bitbucket.org/unimorphic/vite-plugin-linter/src/master/)）
  2. 导入 vite-plugin-eslint 到 [_vite.config.js_](/vite.config.ts) `plugin` 中)

  ```js
  import { defineConfig } from "vite";
  import vue from "@vitejs/plugin-vue";
  import eslintPlugin from "vite-plugin-eslint"; // add

  // https://vitejs.dev/config/
  export default defineConfig({
    plugins: [
      vue(),
      /**
       * add
       */
      eslintPlugin({
        include: ["src/**/*.{vue,js,ts,jsc,tsc}"],
      }),
    ],
  });
  ```

  - 在 [_package.json_](/package.json) 中新增命令 `"lint:script": "eslint . --ext .vue,.js,.jsx,.ts,.tsx"` 即可进行快速校验
  - 报错 <span red>Parsing error: '>' expected.eslint</span> 1. 安装 [vue-eslint-parser](https://github.com/vuejs/vue-eslint-parser) `pnpm add -D vue-eslint-parser` 2. 在 eslint 配置文件 [_.eslintrc.cjs_](/.eslintrc.cjs) 中新增 `parser: "vue-eslint-parser"` (将原 `parser: "@typescript-eslint/parser"` 移动到 `parserOptions` 中)
    > 新 eslint 初始化 typescript 项目时， **如果选择使用 eslint 修改代码风格** 会将 **eslint-config-standard** 替换为新 **eslint-config-standard-with-typescript** ，可能产生以下问题：

* <span red>Error: Error while loading rule '@typescript-eslint/dot-notation': You have used a rule which requires parserServices to be generated. You must therefore provide a value for the "parserOptions.project" property for @typescript-eslint/parser.</span>  
  解决办法：在 [_.eslintrc.cjs_](/.eslintrc.cjs) 的 `parserOptions` 字段中新增 `project: ['tsconfig.json']` 参考 [stackoverflow](https://stackoverflow.com/questions/64116378/error-while-loading-rule-typescript-eslint-dot-notation)
* <span red>vite-env.d.ts
  1:1 error Do not use a triple slash reference for vite/client, use `import` style instead @typescript-eslint/triple-slash-reference</span> （不鼓励使用三斜线，但 vite 用了）解决办法：关闭此规则：

  ```json
  {
    "rules": {
      "@typescript-eslint/triple-slash-reference": "off"
    }
  }
  ```

* <span red>HelloWorld.vue 4:29 error Parsing error: Unexpected token )</span> 解决办法：在 [_.eslintrc.cjs_](/.eslintrc.cjs) 的 `parserOptions` 中新增 `parser: "@typescript-eslint/parser"`。
* 如果参考 [_typescript-eslint_](https://typescript-eslint.io/getting-started) 官网配置，安装 **@typescript-eslint/parser** 且配置其为 eslint 的 `parser`（本来新插件不需要手动安装， **eslint-config-standard-with-typescript** 中已经包含了，可能是我此时官网手册未更新）会引起如下错误：
  1. <span red>error Parsing error: ESLint was configured to run on `<tsconfigRootDir>/src\App.vue` using `parserOptions.project`: <tsconfigRootDir>/tsconfig.json
     The extension for the file (`.vue`) is non-standard. You should add `parserOptions.extraFileExtensions` to your config</span>  
      解决办法：按提示将对应的文件后缀加入到 [_.eslintrc.cjs_](/.eslintrc.cjs) 的 `parserOptions.extraFileExtensions: ['.vue']` 中，对于其他文件 `.css, .scss, .svg` 等可通过 [_.eslintignore_](/.eslintignore) 忽略排除。
  2. [_.eslintrc.cjs_](/.eslintrc.cjs) 的 `module` 字段编辑器报错，[_vite.config.ts_](/vite.config.ts) 的 `import` 字段编辑器报错，两者 hover 时提示： <span red>Parsing error: ESLint was configured to run on `<tsconfigRootDir>/.eslintrc.cjs` using `parserOptions.project`: <tsconfigRootDir>/tsconfig.json
     However, that TSConfig does not include this file.</span>  
      解决办法：按提示将 [_.eslintrc.cjs_](/.eslintrc.cjs), [_vite.config.ts_](/vite.config.ts) 加入 [_typescript.json_](/tsconfig.json) 的 `"include"` 中，或加入 [_.eslintignore_](/.eslintignore) 忽略排除。

<style>
  [red], [red] * {
    color: red;
  }
</style>
