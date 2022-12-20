- 配置 SASS

  - 安装 `pnpm add -D sass`
  - Vite 已默认提供了配置 CSS 预处理器的选项，在 Vite 配置文件 [_vite.config.js_](/vite.config.ts) 的 [`css.preprocessorOptions`](https://cn.vitejs.dev/config/shared-options.html#css-preprocessoroptions) 中初始化 CSS 预处理器的全局配置。

  ```js
    {
      css: {
        preprocessorOptions: {
          scss: {
            additionalData: `@import "/src/assets/styles/global.scss";`,
          },
        },
      },
    }
  ```

- 配置 PostCSS

  - 安装 `pnpm add -D postcss`
  - 安装 VS Code PostCSS 插件 `ext install csstools.postcss`
  - 按需安装 PostCSS 插件
    1. 自动添加浏览器前缀 `pnpm add -D autoprefixer`
    2. 像素单位转视口宽度 `pnpm add -D postcss-px-to-viewport`
    3. 转换使用的 CSS 新特性（包括自动添加前缀） `pnpm add -D postcss-preset-env`
    - 会自动读取 [_.browserslistrc_](/.browserslistrc) 适配目标浏览器，也可传入 `browsers` 参数覆盖（ Vite 默认兼容的浏览器版本较高，如需修改需通过 [_@vite/plugin_legacy_](https://github.com/vitejs/vite/tree/main/packages/plugin-legacy#targets) 的 `target` 属性向 [_@babel/preset-env_](https://babel.docschina.org/docs/en/babel-preset-env/#targets) 传递参数，默认传递 `default` ，而 [_@vite/plugin_legacy_](https://github.com/vitejs/vite/tree/main/packages/plugin-legacy#targets) 不受 [_.browserslistrc_](/.browserslistrc) 影响）
    4. 其他的：解析类 HTML 文件 `pnpm add -D postcss-html` ；结合 SCSS `pnpm add -D postcss-scss` ；使用 PostCSS 嵌套（类似 scss 语法，有另一个插件类似与 W3C 标准语法的） `pnpm add -D postcss-nested` ；
  - Vite 已默认提供了配置 PostCSS 的选项，在 Vite 配置文件 [_vite.config.js_](/vite.config.ts) 的 [`css.postcss`](https://cn.vitejs.dev/config/shared-options.html#css-postcss) 中初始化 PostCSS 配置或指明其文件路径 [_postcss.config.cjs_](/postcss.config.cjs) 。

  ```js
  {
    css: {
      postcss: "postcss.config.cjs",
    },
  }
  ```

- 配置 stylelint

  - 安装 `pnpm add -D stylelint`
  - 安装 VS Code PostCSS 插件 `ext install stylelint.vscode-stylelint`
  - 安装标准配置 `pnpm add -D stylelint-config-standard`
  - 创建配置文件 [_.stylelintrc.json_](/.stylelintrc.json) 设置 `"extends"` 字段继承标准配置
  - 结合其他工具
    1.  结合 Prettier `pnpm add -D stylelint-config-prettier`
    2.  结合 SCSS `pnpm add -D stylelint-config-standard-scss`
    3.  结合 Vue（依赖 `postcss-html`） `pnpm add -D postcss-html stylelint-config-standard-vue`
    4.  属性排序组合插件 `pnpm add -D stylelint-order`
  - 将上述工具配置到配置文件 [_.stylelintrc.json_](/.stylelintrc.json) 中

  - 配置忽略文件 [_.stylelintignore_](/.stylelintignore)

  ```
  /**/*.ts
  /**/*.svg
  dist
  ```

  - 在 [_package.json_](/package.json) 的快捷命令中添加 `"lint:style": "stylelint ./**/*.{css,scss,sass,less,vue,jsx,tsx}"`
  - 通过 vite 插件启用 stylelint ，打印校验信息到控制台
    1. 安装 vite 对应的 stylelint 插件 [_vite-plugin-stylelint_](https://www.npmjs.com/package/vite-plugin-stylelint) `pnpm add -D vite-plugin-stylelint`
    2. 导入 vite-plugin-eslint 到 [_vite.config.js_](/vite.config.ts) `plugin` 中
