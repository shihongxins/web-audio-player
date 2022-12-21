- 了解[_提交规范_](https://juejin.cn/post/7156957907890733063#heading-58)
- 使用 commitlint 校验提交信息
  - 安装 commitlint
  ```shell
  # 安装 commitlint 工具及其通用校验提交规范
  pnpm add -D @commitlint/cli @commitlint/config-conventional
  ```
  - 创建配置文件 [_commitlint.config.cjs_](/commitlint.config.cjs)
  ```shell
  echo "module.exports = {extends: ['@commitlint/config-conventional']}" > commitlint.config.cjs
  ```
  - 结合 husky 自动校验
    - [_使用 husky_](/docs/%E9%85%8D%E7%BD%AEhusky%E5%92%8Clint-staged.md)
    - 创建校验 [_commit-msg_](/.husky/commit-msg) 的钩子脚本内容是运行 commitlint 校验输入的提交信息
    ```shell
    pnpm husky add .husky/commit-msg  'npx --no -- commitlint --edit ${1}'
    ```
  - 测试
  ```shell
  git add .
  git commit -m "错误的提交信息，husky 运行 commit-msg 钩子后，触发 commitlint 校验失败"
  ```
