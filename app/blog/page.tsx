import { Metadata } from 'next'
import { getAllPosts, getFeaturedPosts, getAllCategories } from '@/lib/blog'
import BlogClientPage from './blog-client'

// SEO优化的博客页面元数据
export async function generateMetadata(): Promise<Metadata> {
  const title = "Slice Master Blog - Game Tips, Strategies & Guides"
  const description = "Master Slice Master with our expert guides, tips, and strategies. Learn advanced techniques, unlock all blades, and achieve high scores in this addictive knife throwing game."
  const url = 'https://slice-master.cc/blog'
  
  return {
    title,
    description,
    keywords: [
      'slice master blog',
      'knife throwing game tips',
      'slicing game strategies', 
      'blade unlocking guide',
      'high score techniques',
      'slice master tutorial',
      'knife game walkthrough',
      'cutting game tips'
    ].join(', '),
    metadataBase: new URL('https://slice-master.cc'),
    alternates: {
      canonical: '/blog',
    },
    openGraph: {
      title,
      description,
      url: '/blog',
      siteName: 'Slice Master Game',
      type: 'website',
      locale: 'en_US',
      images: [
        {
          url: '/og-blog.jpg',
          width: 1200,
          height: 630,
          alt: 'Slice Master Blog - Game Tips and Strategies',
        }
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: ['/og-blog.jpg'],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  }
}

// 生成结构化数据
function generateBlogStructuredData(posts: any[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    name: 'Slice Master Blog',
    description: 'Expert guides, tips, and strategies for mastering the Slice Master knife throwing game',
    url: 'https://slice-master.cc/blog',
    publisher: {
      '@type': 'Organization',
      name: 'Slice Master Game',
      url: 'https://slice-master.cc',
    },
    blogPost: posts.slice(0, 10).map(post => ({
      '@type': 'BlogPosting',
      headline: post.title,
      description: post.description,
      url: `https://slice-master.cc/blog/${post.slug}`,
      datePublished: post.publishDate,
      author: {
        '@type': 'Person',
        name: post.author,
      },
      keywords: post.tags.join(', '),
    })),
  }
}

export default function BlogPage() {
  // 在服务端获取数据
  const allPosts = getAllPosts()
  const featuredPosts = getFeaturedPosts()
  const categories = ['All', ...getAllCategories()]

  // 生成结构化数据
  const structuredData = generateBlogStructuredData(allPosts)

  return (
    <>
      {/* 结构化数据 */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />
      
      <BlogClientPage 
        allPosts={allPosts}
        featuredPosts={featuredPosts}
        categories={categories}
      />
    </>
  )
} 