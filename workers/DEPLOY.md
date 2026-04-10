# Cloudflare Workers 部署说明（双项目）

已拆成两个独立 Worker 项目：

- `workers/sbti-worker` → `sbti.wenyuanw.me`
- `workers/gbti-worker` → `gbti.wenyuanw.me`

## 1) 前置准备

- Cloudflare 已托管域名 `wenyuanw.me`
- 已登录 Wrangler：

```bash
wrangler login
```

## 2) DNS 建议

在 Cloudflare DNS 中创建并开启代理（橙云）：

- `sbti`（`sbti.wenyuanw.me`）
- `gbti`（`gbti.wenyuanw.me`）

可以用 `CNAME` 指向 `@`（或任意已代理记录），重点是该记录需走 Cloudflare 代理。

## 3) 部署 SBTI Worker

```bash
cd workers/sbti-worker
wrangler deploy
```

对应配置：

- 路由：`sbti.wenyuanw.me/*`
- 资源目录：`sbti/`（只放行 `/`、`/index.html`、`/image/*`）

## 4) 部署 GBTI Worker

```bash
cd workers/gbti-worker
wrangler deploy
```

对应配置：

- 路由：`gbti.wenyuanw.me/*`
- 资源目录：`gbti/`（只放行 `/`、`/index.html`、`/image/*`）

## 5) 验证

- `https://sbti.wenyuanw.me`
- `https://gbti.wenyuanw.me`

如果返回 404，优先检查：

- DNS 是否已代理（橙云）
- Worker 路由是否和 `wrangler.toml` 一致
- 账号/zone 是否与 `wenyuanw.me` 同一个 Cloudflare 账户
