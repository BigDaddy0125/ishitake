# Ishitake Remote Robot Site

本项目已整理为与 `C:\work\vue3-ci-demo` 同类的可部署结构：

- 本地开发：`npm run dev`
- 构建产物：`npm run build`（输出到 `dist/`）
- 预览产物：`npm run preview`
- CI/CD：`.github/workflows/ci-cd.yml`（GitHub Pages）

## 交付给原官网作者时的建议

1. 直接接管本仓库，使用相同的 Node 构建链路。
2. 若目标仍为服务器 `13.115.0.216`（EC2/Nginx），仅需把 `dist/` 同步到站点目录即可。

## 服务器部署（Nginx）示例

在服务器上执行：

```bash
npm ci
npm run build
sudo rsync -av --delete dist/ /var/www/html/
sudo systemctl reload nginx
```

## 页面入口

- 首页：`index.html`
- 会社概要：`company.html`
