import { Metadata } from 'next'
import BlogClientPage from './blog-client'
import { getAllPosts } from '@/lib/blog'

// SEO优化的元数据 - 服务端处理
export const metadata: Metadata = {
  title: "iOS 26 Blog - Latest News, Updates & Features | Apple 2025",
  description: "Stay updated with the latest iOS 26 news, feature announcements, beta updates, and developer insights. Your source for Apple's newest mobile operating system.",
  keywords: "iOS 26 blog, Apple news, iOS updates, WWDC 2025, iPhone features, Apple Intelligence, Liquid Glass design",
  openGraph: {
    title: "iOS 26 Blog - Latest News, Updates & Features | Apple 2025",
    description: "Stay updated with the latest iOS 26 news, feature announcements, beta updates, and developer insights. Your source for Apple's newest mobile operating system.",
    type: "website",
    url: "https://ios26.com/blog",
    siteName: "iOS 26 Official",
  },
  twitter: {
    card: "summary_large_image",
    title: "iOS 26 Blog - Latest News, Updates & Features | Apple 2025",
    description: "Stay updated with the latest iOS 26 news, feature announcements, beta updates, and developer insights. Your source for Apple's newest mobile operating system.",
  },
}

export default function BlogPage() {
  // 在服务端获取数据
  const posts = getAllPosts()
  const categories = ["All", ...Array.from(new Set(posts.map(post => post.category)))]
  
  return <BlogClientPage posts={posts} categories={categories} />
} 