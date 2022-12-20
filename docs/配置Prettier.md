- 安装 prettier `pnpm add -D prettier`
- 安装 VS Code Prettier 插件 `ext install esbenp.prettier-vscode`
- 初始化 prettier 配置文件 [_.prettierrc.yml_](/.prettierrc.yml)
- 配置忽略文件 [_.prettierignore_](/.prettierignore)
- 解决 eslint 与 prettier 的冲突问题
  - 安装 eslint-plugin-prettier eslint-config-prettier 依赖 `pnpm add -D eslint-plugin-prettier eslint-config-prettier` 修改 eslint 配置文件 [_.eslintrc.cjs_](/.eslintrc.cjs) ：
    1. 扩展项中添加 `extends: ["plugin:prettier/recommended"]`
    2. 插件项中添加 `plugins: ["prettier"]`
    3. 规则中添加 `rules: { "prettier/prettier": "error" }`
- 在 [_package.json_](/package.json) 中新增命令 `"format": "prettier . --write"` 即可进行快速校验
