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
- 配置 [_ESLint_](/docs/%E9%85%8D%E7%BD%AEESLint.md)
- 配置 [_Prettier_](/docs/%E9%85%8D%E7%BD%AEPrettier.md)
- 配置 [_CSS 相关_](/docs/%E9%85%8D%E7%BD%AECSS%E7%9B%B8%E5%85%B3.md)

## 提交检测

- 校验代码规范
  - 使用 [_配置 husky 和 lint-staged_](/docs/配置husky和lint-staged.md)
- 校验提交规范
  - 使用 [_commitlint_](/docs/commitlint.md) 校验提交信息
