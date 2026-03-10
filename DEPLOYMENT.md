# Deployment Handover Notes

## 1) Build

```bash
npm ci
npm run build
```

Build output is generated under `dist/`.

## 2) Deploy to GitHub Pages (same style as vue3-ci-demo)

- Workflow file: `.github/workflows/ci-cd.yml`
- Trigger: push / pull_request to `master`
- PR creates preview URL

Repository settings required:

1. GitHub -> Settings -> Pages
2. Source = GitHub Actions

## 3) Deploy to existing server (13.115.0.216)

If the production site remains on EC2:

1. Copy `dist/` to web root (example `/var/www/html/`)
2. Keep existing Nginx config
3. Reload Nginx

Example:

```bash
rsync -av --delete dist/ user@13.115.0.216:/var/www/html/
ssh user@13.115.0.216 "sudo systemctl reload nginx"
```

## 4) Routing note

This site is multi-page static (`index.html`, `company.html`) and does not require SPA rewrite rules.
