> 使用 commitizen 和 commitlint 校验 commit message 符合规范后，可根据 commit message 自动生成项目的 [_CHANGELOG.md_](/CHANGELOG.md)

- 工具 [_conventional-changelog-cli_](https://github.com/conventional-changelog/conventional-changelog/tree/master/packages/conventional-changelog-cli#readme) 会自动读取 **_fix, feat, perf, break change_** 等提交信息，以此生成 [_CHANGELOG.md_](/CHANGELOG.md) 文件

- 安装 `pnpm add -D conventional-changelog-cli`
- 使用
  - 初始化生成 CHANGELOG.md
  ```shell
  conventional-changelog -p angular -i CHANGELOG.md -s -r 0
  ```
  - 后续自动追加
  ```shell
  conventional-changelog -p angular -i CHANGELOG.md -s
  ```
  - 将自动追加添加到 [_package.json_](/package.json) 的自动快捷命令中
  ```json
  {
    "script": {
      "changelog": "conventional-changelog -p angular -i CHANGELOG.md -s"
    }
  }
  ```
