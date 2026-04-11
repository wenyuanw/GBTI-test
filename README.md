<p align="center">
  <img src="https://github.com/user-attachments/assets/0d080f63-53e1-4aa3-9b09-b9b9f97ae559" width="680" style="background: transparent;">
</p>

# SBTI / GBTI 测试项目

本仓库包含两个测试页面：

- `SBTI`：原始镜像测试页（娱乐向人格测试）
- `GBTI`：股票购买者类型测试（娱乐向交易风格画像）

## 项目参考信息（保留）

### SBTI 测试（镜像）

图片和html已拆分

地址：https://sbti.unun.dev  
原作者：[B站@蛆肉儿串儿](https://www.bilibili.com/video/BV1LpDHByET6/)

### GBTI 测试

创意是来自：小红书用户「拿住股票一百年不变」，我只是让 AI 自己 Vibe Coding 一个出来。

🔗小红书帖子链接：

- [小红书原贴链接](http://xhslink.com/o/8OeUk9GRc8M )

## 本地预览（pnpm）

已添加本地开发依赖：`vite`、`wrangler`。

```bash
pnpm install
```

### 预览静态页面

```bash
pnpm dev
```

- 默认地址：`http://localhost:5173`
- SBTI 页面：`/`
- GBTI 页面：`/gbti/`

### 预览 Worker（可选）

```bash
pnpm dev:sbti-worker
pnpm dev:gbti-worker
```

- `dev:sbti-worker` 默认端口：`8787`
- `dev:gbti-worker` 默认端口：`8788`

### 一键同时启动（静态页 + 两个 Worker）

```bash
pnpm dev:all
```

## 部署（Cloudflare Workers）

先登录 Cloudflare：

```bash
pnpm exec wrangler login
```

分别部署：

```bash
pnpm deploy:sbti
pnpm deploy:gbti
```

一键部署两个项目：

```bash
pnpm deploy:all
```
