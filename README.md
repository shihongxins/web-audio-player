# WebAudioPlayer

一款 **网页音频播放器** ，主要是用来学习 Web Audio API 和 File System API 。

## 初始化项目

- [使用 pnpm](/docs/pnpm%E4%BD%BF%E7%94%A8.md)
- 初始化仓库
  ```cmd
  git init
  git add .
  git commit -am "feat: Initial commit 🎉."
  ```

## 配置编码风格

- 配置 [_.editorconfig_](/.editorconfig) 对应 VS Code 插件 `ext install EditorConfig.EditorConfig`
- 添加 [_.gitattributes_](/.gitattributes) 文件，保证 git 适配换行符（解决 `Delete `␍`eslint` 错误）
- 配置 [_ESLint_](/docs/%E9%85%8D%E7%BD%AEESLint.md)
- 配置 [_Prettier_](/docs/%E9%85%8D%E7%BD%AEPrettier.md)
- 配置 [_CSS 相关_](/docs/%E9%85%8D%E7%BD%AECSS%E7%9B%B8%E5%85%B3.md)

## 提交检测

- 校验代码规范
  - 使用 [_配置 husky 和 lint-staged_](/docs/配置husky和lint-staged.md)
- 校验提交规范
  - 使用 [_commitlint_](/docs/commitlint.md) 校验提交信息
  - 使用 [_commitizen_](/docs/commitizen.md) 交互式生成 commit-msg

## 其他

- [_自动生成 CHANGELOG_](/docs/%E8%87%AA%E5%8A%A8%E7%94%9F%E6%88%90%20changelog.md)
- TODO: 规范版本发布
- TODO: 自动化部署继承

## 参考

- [《手摸手教你使用最新版 husky(v7.0.1)让代码更优雅规范》- 掘金](https://juejin.cn/post/6982192362583752741)
- [《详解如何使得代码提交更规范（lint-staged、commitlint、commitizen、conventional-changelog-cli）》- 掘金](https://juejin.cn/post/6976891381914533918)
- [《基于 Vite 从 0 到 1 搭建一个 Vue3 相关的工程化模板项目》- 掘金](https://juejin.cn/post/7174643560594014245)
- [《一文了解 VsCode、Eslint、Prettier、Husky 相关配置》- 掘金](https://juejin.cn/post/7169889743486844965)
- [《从 0 搭建 Vite 3 + Vue 3 前端工程化项目》- 掘金](https://juejin.cn/post/7156957907890733063)
- [《从零到一实现对 Git Commit Message 规范和校验，并生成 changelog 文档》- 掘金](https://juejin.cn/post/7005135785263366157#heading-9)
