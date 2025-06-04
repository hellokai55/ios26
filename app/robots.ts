import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  const baseUrl = 'https://slice-master.cc'
  
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/', '/admin/'], // 禁止爬取API和管理页面
    },
    sitemap: `${baseUrl}/sitemap.xml`,
    host: baseUrl,
  }
} 