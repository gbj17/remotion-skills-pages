# Remotion Agent Skills 展示站

基于 [remotion-dev/skills](https://github.com/remotion-dev/skills)（Remotion 官方 Agent Skills，★5.3k）制作的**中文静态展示站**：卡片式目录 + 12 个技能的完整文档详情页。

## 站点结构

```
remotion-skills-pages/
├── website/                        # 要部署的静态站点（GitHub Pages 的内容根目录）
│   ├── index.html                  # 首页：英雄区 + 搜索 + 12 张技能卡片
│   ├── style.css                   # 深色主题样式
│   ├── app.js                      # 搜索过滤 + 安装命令一键复制
│   └── skills/                     # 12 个技能详情页（SKILL.md 全文渲染）
│       ├── remotion-best-practices.html
│       ├── remotion-captions.html
│       └── …（共 12 页）
└── .github/
    └── workflows/
        └── deploy-pages.yml        # GitHub Actions 自动部署到 Pages
```

## 部署步骤（约 2 分钟）

### 1. 在 GitHub 创建新仓库

去 https://github.com/new 创建一个空仓库，例如 `remotion-skills-pages`（**不要**勾选初始化 README）。

### 2. 推送本仓库代码

```bash
cd remotion-skills-pages
git init
git add .
git commit -m "Remotion Agent Skills showcase site"
git branch -M main
git remote add origin https://github.com/<你的用户名>/remotion-skills-pages.git
git push -u origin main
```

### 3. 开启 Pages（一次性设置）

仓库页面 → **Settings → Pages** → **Source** 选择 **GitHub Actions**。

### 4. 完成

推送后 1-2 分钟内自动上线：

```
https://<你的用户名>.github.io/remotion-skills-pages/
```

之后每次推送 `website/` 下的改动，都会自动重新部署（`Actions` 标签页可看构建状态）。

## 常见问题

- **Actions 报权限错**：Settings → Actions → General → Workflow permissions 选择 **Read and write permissions**。
- **页面 404**：确认仓库为 Public（免费账户的私有仓库默认不开 Pages），且 Pages Source 已选 GitHub Actions。
- **想要自定义域名**：在 `website/` 下加 `CNAME` 文件并配置 DNS，详见 [GitHub Pages 文档](https://docs.github.com/pages/configuring-a-custom-domain-for-your-github-pages-site)。

## 许可

- 站点框架：随意使用。
- 技能文档内容：来自 remotion-dev/skills，遵循上游仓库许可，版权归 Remotion 团队所有。
