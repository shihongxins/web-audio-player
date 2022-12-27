- CI/CD

  - CI 即 Continuous Integration 持续集成：开发人员在合并代码到主分支或提交主分支时，会运行自动化测试（单元测试和集成测试），然后运行自动化构建。
  - CD - Continuous Delivery 持续交付：运行完 CI 自动化后可快速将开发环境代码发布到生产环境的代码库。 - Continuous Deployment 持续部署：可以自动将应用发布到生产环境。
    ![_CI/CD 流程图_](/docs/CICD.webp)
    > 常见的 CI 工具有： _GitHub Actions, GitLab CI, Travis CI 等_ ，下面介绍 _GitHub Actions_ 的使用，参考 [_GitHub Actions 入门教程_](https://www.ruanyifeng.com/blog/2019/09/getting-started-with-github-actions.html)

- GitHub Actions
  - 新建 Github 仓库
  - 设置 [_Personal access tokens_](/https://github.com/settings/tokens)
    - 点击头像 依次进入 **Settings > Developer settings > Personal access tokens > Tokens(classic)**
    - 点击按钮选择 **Generate new token(classic)** 选项，输入备注、过期时间、赋予 **repo 和 workflow** 权限后点击底部按钮生成 token （❗ 该 token 只会显示一次，复制后保存到另外一个地方）。
  - 进入仓库，然后进入仓库的 **Setting** 页面
    - 找到 **Pages** 选项卡，设置 _Branch_ 为 `main` ；如果有自定义域名，可填入 _Custom domain_ ，没有可忽略。
    - 找到 **Secrets > Actions** 选项卡，点击按钮新建一个 _secert_ 命名为 `ACCESS_TOKEN` 值为前面建立的 token 。
  - 打开本地项目
    - 建立 [_.github/workflows/gh-deploy.yml_](/.github/workflows/gh-deploy.yml) 文件，内容参考教程
    - 在 [_package.json_](/package.json) 中添加 `"homepage": "https://<user-name>.github.io/<project-name>"`
  - 推送本地修改，在仓库的 **Actions** 页面查看 CI 工作流运行情况。
  - 如果部署后出现请求资源文件 404 的话，可修改打包部署的公共资源路径，如修改 [_vite.config.ts_](/vite.config.ts) 的 `base: "./"`
