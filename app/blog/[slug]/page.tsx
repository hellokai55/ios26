import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'
import { Breadcrumb } from '@/components/ui/breadcrumb'
import { getPostBySlug, getAllPostSlugs, renderMarkdown, getRecentPosts } from '@/lib/blog'

// 生成静态参数
export async function generateStaticParams() {
  const slugs = getAllPostSlugs()
  return slugs.map((slug) => ({
    slug,
  }))
}

// 动态生成SEO元数据
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const post = getPostBySlug(slug)
  
  if (!post) {
    return {
      title: 'Post Not Found - Slice Master Blog',
      description: 'The requested blog post could not be found.',
      robots: {
        index: false,
        follow: false,
      },
    }
  }

  const title = `${post.title} - Slice Master Blog`
  const description = post.description
  const url = `https://slice-master.cc/blog/${slug}`
  
  return {
    title,
    description,
    keywords: [
      ...post.tags,
      'slice master',
      'knife throwing game',
      'game guide',
      'gaming tips'
    ].join(', '),
    metadataBase: new URL('https://slice-master.cc'),
    alternates: {
      canonical: `/blog/${slug}`,
    },
    openGraph: {
      title,
      description,
      url: `/blog/${slug}`,
      siteName: 'Slice Master Game',
      type: 'article',
      locale: 'en_US',
      publishedTime: post.publishDate,
      modifiedTime: post.publishDate,
      authors: [post.author],
      tags: post.tags,
      section: post.category,
      images: [
        {
          url: `/og-blog-${slug}.jpg`,
          width: 1200,
          height: 630,
          alt: post.title,
        }
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [`/og-blog-${slug}.jpg`],
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

// 生成文章结构化数据
function generateArticleStructuredData(post: any, relatedPosts: any[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.description,
    image: `https://slice-master.cc/og-blog-${post.slug}.jpg`,
    author: {
      '@type': 'Person',
      name: post.author,
    },
    publisher: {
      '@type': 'Organization',
      name: 'Slice Master Game',
      url: 'https://slice-master.cc',
      logo: {
        '@type': 'ImageObject',
        url: 'https://slice-master.cc/logo.png',
      },
    },
    datePublished: post.publishDate,
    dateModified: post.publishDate,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://slice-master.cc/blog/${post.slug}`,
    },
    keywords: post.tags.join(', '),
    articleSection: post.category,
    wordCount: post.content.split(' ').length,
    timeRequired: post.readTime,
    about: {
      '@type': 'Thing',
      name: 'Slice Master Game',
    },
    mentions: relatedPosts.map(relatedPost => ({
      '@type': 'Article',
      name: relatedPost.title,
      url: `https://slice-master.cc/blog/${relatedPost.slug}`,
    })),
  }
}

// 生成面包屑结构化数据
function generateBreadcrumbStructuredData(post: any) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://slice-master.cc',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Blog',
        item: 'https://slice-master.cc/blog',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: post.title,
        item: `https://slice-master.cc/blog/${post.slug}`,
      },
    ],
  }
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = getPostBySlug(slug)
  
  if (!post) {
    notFound()
  }

  const recentPosts = getRecentPosts(3).filter(p => p.slug !== slug)
  
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Blog", href: "/blog" },
    { label: post.title }
  ]

  // 渲染Markdown内容
  const htmlContent = renderMarkdown(post.content)

  // 生成结构化数据
  const articleStructuredData = generateArticleStructuredData(post, recentPosts)
  const breadcrumbStructuredData = generateBreadcrumbStructuredData(post)

  return (
    <>
      {/* 结构化数据 */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(articleStructuredData),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbStructuredData),
        }}
      />
      
      <div className="min-h-screen bg-gradient-to-br from-orange-50 via-red-50 to-pink-50">
        <Header />
        
        <main className="container mx-auto px-4 py-12" role="main">
          <Breadcrumb items={breadcrumbItems} />
          
          <article className="max-w-4xl mx-auto" itemScope itemType="https://schema.org/Article">
            {/* Article Header */}
            <header className="mb-12">
            <div className="flex items-center gap-4 mb-6">
              <Badge variant="secondary" className="bg-red-100 text-red-700">
                <span itemProp="articleSection">{post.category}</span>
              </Badge>
              <span className="text-gray-500" itemProp="timeRequired">{post.readTime}</span>
              {post.featured && (
                <Badge className="bg-gradient-to-r from-orange-500 to-red-500 text-white">
                  Featured
                </Badge>
              )}
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6 leading-tight" itemProp="headline">
              {post.title}
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 leading-relaxed" itemProp="description">
              {post.description}
            </p>
            
            <div className="flex items-center justify-between text-sm text-gray-500 border-b border-gray-200 pb-6">
              <div className="flex items-center gap-4">
                <span>By <span itemProp="author" itemScope itemType="https://schema.org/Person">
                  <span itemProp="name">{post.author}</span>
                </span></span>
                <span>•</span>
                <time dateTime={post.publishDate} itemProp="datePublished">
                  {new Date(post.publishDate).toLocaleDateString('en-US', { 
                    year: 'numeric', 
                    month: 'long', 
                    day: 'numeric' 
                  })}
                </time>
                <meta itemProp="dateModified" content={post.publishDate} />
              </div>
              <div className="flex gap-2">
                {post.tags.map((tag) => (
                  <Badge key={tag} variant="outline" className="text-xs">
                    <span itemProp="keywords">{tag}</span>
                  </Badge>
                ))}
              </div>
            </div>
          </header>

          {/* Article Content */}
          <div className="prose prose-lg max-w-none mb-16">
            <Card className="rounded-3xl shadow-lg border-0 bg-white/90 backdrop-blur-sm">
              <CardContent className="p-8 md:p-12">
                <div 
                  className="article-content"
                  itemProp="articleBody"
                  dangerouslySetInnerHTML={{ __html: htmlContent }}
                />
              </CardContent>
            </Card>
          </div>

          {/* Article Footer */}
          <footer className="border-t border-gray-200 pt-8">
            <div className="flex flex-wrap gap-2 mb-8">
              <span className="text-gray-600 font-medium">Tags:</span>
              {post.tags.map((tag) => (
                <Badge key={tag} variant="outline" className="hover:bg-red-50 hover:border-red-300 transition-colors">
                  {tag}
                </Badge>
              ))}
            </div>
            
            {/* CTA */}
            <Card className="rounded-3xl shadow-xl bg-gradient-to-r from-red-500 via-orange-500 to-pink-500 text-white border-0 mb-12">
              <CardContent className="p-8 text-center">
                <h2 className="text-2xl font-bold mb-4">Ready to Apply These Tips?</h2>
                <p className="text-lg mb-6 text-white/90">
                  Put your new knowledge to the test and see how much your gameplay improves!
                </p>
                <Link 
                  href="/#play-game"
                  className="inline-block bg-white text-red-600 hover:bg-gray-50 font-semibold px-8 py-3 rounded-2xl transition-colors"
                >
                  🎮 Play Slice Master Now
                </Link>
              </CardContent>
            </Card>
          </footer>
        </article>

        {/* Related Posts */}
        {recentPosts.length > 0 && (
          <section className="max-w-4xl mx-auto" aria-labelledby="related-posts">
            <h2 id="related-posts" className="text-3xl font-bold text-gray-800 mb-8">
              More Articles You Might Like
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {recentPosts.map((relatedPost) => (
                <Card key={relatedPost.slug} className="rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm">
                  <CardContent className="p-6">
                    <Badge variant="outline" className="mb-3 text-xs">
                      {relatedPost.category}
                    </Badge>
                    <h3 className="font-semibold text-gray-800 mb-2 line-clamp-2">
                      <Link href={`/blog/${relatedPost.slug}`} className="hover:text-red-600 transition-colors">
                        {relatedPost.title}
                      </Link>
                    </h3>
                    <p className="text-sm text-gray-600 mb-4 line-clamp-3">
                      {relatedPost.description}
                    </p>
                    <div className="flex items-center justify-between text-xs text-gray-500">
                      <span>{relatedPost.readTime}</span>
                      <Link 
                        href={`/blog/${relatedPost.slug}`}
                        className="text-red-600 hover:text-red-700 font-medium"
                      >
                        Read →
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
        )}
        </main>

        <Footer />
      </div>
    </>
  )
} 