/** @type {import('next').NextConfig} */
const nextConfig = {
  // Cloudflare Pages 配置
  output: 'export',
  trailingSlash: true,
  skipTrailingSlashRedirect: true,
  distDir: 'out',
  
  // 压缩配置
  compress: true,
  
  // 图片优化 - Cloudflare Pages 兼容配置
  images: {
    unoptimized: true, // Cloudflare Pages 需要禁用 Next.js 图片优化
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  
  // 注意：headers 和 redirects 在 export 模式下不工作
  // 这些功能将通过 Cloudflare Pages 的 _headers 和 _redirects 文件处理
}

module.exports = nextConfig 