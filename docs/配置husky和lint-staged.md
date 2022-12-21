- 了解 [git hooks](https://juejin.cn/post/6974301879731748900#heading-1)
- 配置 **husky** （参考 [_husky 官网_](https://typicode.github.io/husky/#/?id=usage)）

  - 推荐使用 `pnpm dlx husky-init && pnpm install` 安装并初始化
  - 上述操作会在 [_package.json_](/package.json) 中新增命令 `"prepare": "husky install"` 保证其他人在拉取项目后安装依赖时也会自动初始化 **husky** 。同时创建 [_/.husky_](/.husky) 文件夹，和默认的 [_pre-commit_](/.husky/pre-commit) git hook 钩子脚本；
  - 修改 [_pre-commit_](/.husky/pre-commit) git hook 钩子脚本，让在执行 git commit 时自动运行配置的 lint

  ```
    #!/usr/bin/env sh
    . "$(dirname -- "$0")/_/husky.sh"
    # 默认生成的脚本命令
    # npm test

    # 修改成提交前自动运行 lint
    pnpm run format && pnpm run lint:script && pnpm run   lint:style
  ```

  - 通过 husky 新增 git hooks

  ```
  pnppm dlx husky add .husky/<filename> "content"
  git add .husky/<filename>
  git commit -m "xxxx"
  ```

  - 移除 husky

  ```
  pnpm uninstall husky && rm -rf .husky && git config --unset core.hooksPath
  ```

  - 跳过 git hooks

  ```
  git commit -m "xxxx" --no-verify
  ```

> 通过 husky 和 git hooks 的 [_pre-commit_](/.husky/pre-commit) 钩子能够在代码提交前运行代码校验 lint ，但如果每次都校验整个项目的代码会浪费性能，因此通过 [_lint-staged_](https://github.com/okonet/lint-staged#readme) 工具仅校验暂存区的代码提升速度。

- 配置 lint-staged
  - 安装 `pnpm add -D lint-staged`
  - 配置
    - 方式一：在 [_package.json_](/package.json) 中新增 `"lint-staged": {...}` 配置项；
    - 方式二：新建 lint-staged 配置文件 [_.lintstagedrc.yml_](/.lintstagedrc.yml)
  - 使用：修改 husky 的 [_pre-commit_](/.husky/pre-commit) 钩子文件，将自动运行 lint 改为自动运行 lint-staged
