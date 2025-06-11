import { Metadata } from 'next'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { 
  Apple, 
  ArrowLeft,
  Calendar,
  Clock,
  ExternalLink,
  Sparkles,
  Zap,
  MessageSquare,
  Share2,
  User
} from "lucide-react"
import Link from "next/link"
import { notFound } from 'next/navigation'
import { getPostBySlug, getAllPosts, renderMarkdown } from '@/lib/blog'

// 生成静态参数
export async function generateStaticParams() {
  const posts = getAllPosts()
  return posts.map((post) => ({
    slug: post.slug,
  }))
}

// 生成元数据
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const post = getPostBySlug(slug)
  
  if (!post) {
    return {
      title: 'Post Not Found',
      description: 'The requested blog post could not be found.',
    }
  }

  return {
    title: `${post.title} | iOS 26 Blog`,
    description: post.description,
    keywords: `iOS 26, ${post.category}, Apple, iPhone, ${post.tags.join(', ')}`,
    openGraph: {
      title: post.title,
      description: post.description,
      type: 'article',
      publishedTime: post.publishDate,
      authors: [post.author],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.description,
    },
  }
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = getPostBySlug(slug)

  if (!post) {
    notFound()
  }

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "Design": return <Sparkles className="w-5 h-5 text-blue-600" />
      case "AI Features": return <Zap className="w-5 h-5 text-purple-600" />
      case "Beta": return <Apple className="w-5 h-5 text-green-600" />
      case "Announcement": return <MessageSquare className="w-5 h-5 text-orange-600" />
      case "Guides": return <MessageSquare className="w-5 h-5 text-green-600" />
      default: return <MessageSquare className="w-5 h-5 text-gray-600" />
    }
  }

  // 渲染 Markdown 内容
  const renderedContent = renderMarkdown(post.content)

  return (
    <>
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Link href="/" className="flex items-center space-x-2">
              <Apple className="w-8 h-8 text-gray-900" />
              <span className="text-xl font-bold text-gray-900">iOS 26</span>
            </Link>
            <span className="text-gray-400">/</span>
            <Link href="/blog" className="text-gray-600 hover:text-gray-900">Blog</Link>
            <span className="text-gray-400">/</span>
            <span className="text-gray-600 truncate max-w-48">{post.title}</span>
          </div>
          
          <div className="flex items-center space-x-2">
            <Button variant="outline" size="sm" asChild>
              <Link href="/blog">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Blog
              </Link>
            </Button>
          </div>
        </div>
      </header>

      <main className="py-12">
        <div className="container mx-auto px-4 max-w-4xl">
          {/* Article Header */}
          <article className="prose prose-lg max-w-none">
            <header className="mb-12">
              <div className="flex items-center space-x-4 mb-6">
                <Badge className="bg-blue-100 text-blue-800 border-blue-200 flex items-center space-x-2">
                  {getCategoryIcon(post.category)}
                  <span>{post.category}</span>
                </Badge>
                <div className="flex items-center text-gray-500 text-sm space-x-4">
                  <div className="flex items-center space-x-1">
                    <Calendar className="w-4 h-4" />
                    <span>{new Date(post.publishDate).toLocaleDateString()}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Clock className="w-4 h-4" />
                    <span>{post.readTime}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <User className="w-4 h-4" />
                    <span>{post.author}</span>
                  </div>
                </div>
              </div>
              
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                {post.title}
              </h1>
              
              <p className="text-xl text-gray-600 leading-relaxed mb-8">
                {post.description}
              </p>

              {/* Tags */}
              {post.tags.length > 0 && (
                <div className="flex flex-wrap gap-2 mb-8">
                  {post.tags.map((tag) => (
                    <Badge key={tag} variant="outline" className="text-xs">
                      #{tag}
                    </Badge>
                  ))}
                </div>
              )}

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-4 mb-8">
                <Button variant="outline" className="flex items-center space-x-2">
                  <Share2 className="w-4 h-4" />
                  <span>Share Article</span>
                </Button>
              </div>
            </header>

            {/* Article Content */}
            <div className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-p:text-gray-700 prose-strong:text-gray-900 prose-ul:text-gray-700 prose-ol:text-gray-700">
              <div dangerouslySetInnerHTML={{ __html: renderedContent }} />
            </div>
          </article>

          {/* Related Links */}
          <div className="mt-16">
            <Card className="bg-gradient-to-r from-blue-50 to-indigo-50 border-0">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Learn More</h3>
                <p className="text-gray-600 mb-6">
                  Get the latest information and official updates from Apple.
                </p>
                <div className="flex flex-wrap gap-4">
                  <a
                    href="https://www.apple.com/ios/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                      Official Apple iOS
                      <ExternalLink className="w-4 h-4 ml-2" />
                    </Button>
                  </a>
                  <a
                    href="https://developer.apple.com/ios/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button variant="outline">
                      Developer Resources
                      <ExternalLink className="w-4 h-4 ml-2" />
                    </Button>
                  </a>
                  <a
                    href="https://support.apple.com/ios"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button variant="outline">
                      Support Documentation
                      <ExternalLink className="w-4 h-4 ml-2" />
                    </Button>
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Navigation */}
          <div className="mt-12 flex justify-between items-center">
            <Link href="/blog">
              <Button variant="outline" className="flex items-center space-x-2">
                <ArrowLeft className="w-4 h-4" />
                <span>Back to All Articles</span>
              </Button>
            </Link>
            
            <Link href="/">
              <Button variant="outline">
                Return to Home
              </Button>
            </Link>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 mt-16">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <Apple className="w-6 h-6" />
              <span className="text-lg font-bold">iOS 26 Blog</span>
            </div>
            <p className="text-gray-400 text-sm mb-6">
              Your source for the latest iOS 26 news and updates
            </p>
            <div className="flex justify-center space-x-6 text-sm text-gray-400">
              <Link href="/" className="hover:text-white transition-colors">
                Home
              </Link>
              <Link href="/blog" className="hover:text-white transition-colors">
                Blog
              </Link>
              <a href="https://www.apple.com/ios/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                Apple iOS
              </a>
              <a href="https://support.apple.com/ios" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                Support
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
} 