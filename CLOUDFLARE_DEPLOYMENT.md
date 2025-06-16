# Cloudflare Pages 部署指南

## 🚀 部署步骤

### 1. 在 Cloudflare Dashboard 中设置

1. 登录 [Cloudflare Dashboard](https://dash.cloudflare.com/)
2. 进入 **Pages** 部分
3. 点击 **Create a project**
4. 选择 **Connect to Git** 并连接你的 GitHub 仓库

### 2. 构建配置

在 Cloudflare Pages 项目设置中配置：

**Build settings:**
- **Framework preset**: `Next.js (Static HTML Export)`
- **Build command**: `npm run build`
- **Build output directory**: `out`
- **Root directory**: `/` (如果项目在根目录)

### 3. 环境变量设置

在 **Settings** > **Environment variables** 中添加：

```
NODE_VERSION=18
```

### 4. 兼容性标志设置 ⚠️ **重要**

在 **Settings** > **Functions** > **Compatibility flags** 中添加：

**Production environment:**
- 添加 `nodejs_compat` 标志

**Preview environment:**
- 添加 `nodejs_compat` 标志

### 5. 自定义域名设置

在 **Custom domains** 中添加你的域名：
- `ios26.xyz`
- `www.ios26.xyz`

## 📁 项目文件说明

### 配置文件

- `next.config.js` - Next.js 配置，已优化用于 Cloudflare Pages
- `wrangler.toml` - Cloudflare Workers 配置
- `public/_headers` - HTTP 头部配置
- `public/_redirects` - URL 重定向配置

### 构建脚本

```json
{
  "build": "next build",
  "build:cf": "npx @cloudflare/next-on-pages",
  "preview": "npx wrangler pages dev .vercel/output/static --compatibility-date=2024-05-15 --compatibility-flag=nodejs_compat"
}
```

## 🔧 本地测试

### 构建项目
```bash
npm run build
```

### 本地预览（可选）
```bash
npm run preview
```

## 📊 SEO 优化功能

✅ **已配置的 SEO 功能：**
- 动态元数据生成
- 结构化数据 (JSON-LD)
- Open Graph 标签
- Twitter Cards
- Canonical URLs
- XML Sitemap
- Robots.txt
- 安全头部
- 图片优化
- 响应式设计

## 🚨 常见问题解决

### 1. "nodejs_compat compatibility flag not set" 错误

**解决方案：**
在 Cloudflare Pages 项目设置中：
1. 进入 **Settings** > **Functions**
2. 在 **Compatibility flags** 部分
3. 为 **Production** 和 **Preview** 环境都添加 `nodejs_compat`

### 2. 构建失败

**检查清单：**
- ✅ Node.js 版本设置为 18
- ✅ 构建命令为 `npm run build`
- ✅ 输出目录为 `out`
- ✅ 所有依赖都已安装

### 3. 路由不工作

**解决方案：**
确保 `public/_redirects` 文件存在并包含：
```
/* /index.html 200
```

### 4. 静态资源 404

**解决方案：**
检查 `next.config.js` 中的配置：
```javascript
{
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  }
}
```

## 📈 性能优化

### 缓存配置
通过 `public/_headers` 文件配置：
- 静态资源长期缓存
- HTML 文件短期缓存
- 安全头部设置

### 图片优化
- 使用 WebP 格式
- 响应式图片尺寸
- 延迟加载

## 🔒 安全配置

### HTTP 安全头部
- X-Frame-Options: DENY
- X-Content-Type-Options: nosniff
- Referrer-Policy: origin-when-cross-origin
- X-XSS-Protection: 1; mode=block

### HTTPS 强制
Cloudflare Pages 自动强制 HTTPS

## 📞 支持

如果遇到问题：
1. 检查 Cloudflare Pages 构建日志
2. 确认所有配置文件正确
3. 验证兼容性标志设置
4. 查看 [Cloudflare Pages 文档](https://developers.cloudflare.com/pages/)

---

**部署成功后，你的网站将在以下地址可用：**
- `https://your-project.pages.dev`
- `https://ios26.xyz` (如果配置了自定义域名) 