# 我的现代静态网站

一个轻量、无依赖、自动更新结构的网站，支持：

- 📄 文章页面（通过 HTML 文件管理）
- 📚 资源文件（PDF、Word 等）
- 🧮 网页计算器
- 🛠 自定义工具页

## ✅ 内容更新说明

- 文章文件放在 `/articles/`，通过 `loadArticles.js` 自动更新列表
- 资源文件放在 `/resources/`，通过 `loadResources.js` 自动更新列表
- 所有样式在 `/assets/css/style.css` 中定义

## 🚀 部署到 GitHub Pages

1. 创建一个 GitHub 仓库（如 `my-modern-site`）
2. 上传以上所有文件
3. 在仓库中开启 `Pages`（Settings → Pages → 选择 main 分支 / root）
4. 几分钟后即可访问

> 你可以通过修改 JS 中的数组，控制文章和资源文件的显示。
