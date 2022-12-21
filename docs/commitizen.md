> 使用 commitlint 可以校验输入的 commit message ，但每次手动完整输入符合规范的 commit message 有些复杂，因此可以通过 commitizen 以对话形式生成 commit message 。

- [_官网_](https://github.com/commitizen/cz-cli)
- 安装 cli

```shell
pnpm add -D commitizen
# 安装之后就能使用 git cz （全局安装） 或 npx cz （本地安装）命令代替 git commit 命令
```

- 安装适配器
  单独的 commitzizen 并不能以对话形式生成 commit message 。还需安装对应的适配器。如
  - [_cz-conventional-changelog_](https://github.com/commitizen/cz-conventional-changelog)
  - [_cz-git_](https://cz-git.qbb.sh/zh/guide/introduction) 推荐

```shell
pnpm add -D cz-git
```

- 修改 [_package.json_](/package.json) 文件，指定 commitizen 的适配器

```json
{
  "config": {
    "commitizen": {
      "path": "cz-git"
    }
  }
}
```

- 更改 cz-git 的配置模板，建议追加到 commitlint 的配置文件 [_commitlint.config.cjs_](/commitlint.config.cjs) 中，[_参考模板_](https://cz-git.qbb.sh/zh/config/)

- 修改 [_package.json_](/package.json) 文件，将 `npx cz` 添加到快捷命令中

```json
{
  "script": {
    "commit": "cz"
  }
}
```

- 测试：运行快捷命令测试提交 `pnpm run commit`
