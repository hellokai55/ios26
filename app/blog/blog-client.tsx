'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'
import { Breadcrumb } from '@/components/ui/breadcrumb'
import { type BlogPostMeta } from '@/lib/blog'

interface BlogClientPageProps {
  allPosts: BlogPostMeta[]
  featuredPosts: BlogPostMeta[]
  categories: string[]
}

export default function BlogClientPage({ allPosts, featuredPosts, categories }: BlogClientPageProps) {
  const [selectedCategory, setSelectedCategory] = useState('All')

  // 根据选中的分类过滤文章
  const filteredPosts = selectedCategory === 'All' 
    ? allPosts.filter(post => !post.featured)
    : allPosts.filter(post => post.category === selectedCategory && !post.featured)

  const filteredFeaturedPosts = selectedCategory === 'All'
    ? featuredPosts
    : featuredPosts.filter(post => post.category === selectedCategory)

  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Blog" }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-red-50 to-pink-50">
      <Header />
      
      <main className="container mx-auto px-4 py-12" role="main">
        <Breadcrumb items={breadcrumbItems} />
        
        {/* Blog Header */}
        <header className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Slice Master Blog
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Master the art of slicing with our expert guides, strategies, and tips. 
            From beginner tutorials to advanced techniques, become the ultimate Slice Master.
          </p>
        </header>

        {/* Categories Filter */}
        <section className="mb-12" aria-labelledby="blog-categories">
          <h2 id="blog-categories" className="text-2xl font-bold text-gray-800 mb-6">
            Browse by Category
          </h2>
          <div className="flex flex-wrap gap-3">
            {categories.map((category) => (
              <Badge 
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                className={`px-4 py-2 cursor-pointer transition-colors ${
                  selectedCategory === category 
                    ? 'bg-red-600 text-white hover:bg-red-700' 
                    : 'hover:bg-red-50 hover:border-red-300'
                }`}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </Badge>
            ))}
          </div>
          {selectedCategory !== 'All' && (
            <p className="text-gray-600 mt-4">
              Showing articles in <strong>{selectedCategory}</strong> category
            </p>
          )}
        </section>

        {/* Featured Posts */}
        {filteredFeaturedPosts.length > 0 && (
          <section className="mb-16" aria-labelledby="featured-posts">
            <h2 id="featured-posts" className="text-3xl font-bold text-gray-800 mb-8 flex items-center gap-2">
              🔥 Featured Articles
              {selectedCategory !== 'All' && (
                <span className="text-lg font-normal text-gray-600">
                  in {selectedCategory}
                </span>
              )}
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {filteredFeaturedPosts.map((post) => (
                <Card key={post.slug} className="rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 border-0 bg-white/90 backdrop-blur-sm">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <Badge variant="secondary" className="bg-red-100 text-red-700">
                        {post.category}
                      </Badge>
                      <span className="text-sm text-gray-500">{post.readTime}</span>
                    </div>
                    <CardTitle className="text-xl hover:text-red-600 transition-colors">
                      <Link href={`/blog/${post.slug}`} title={post.title}>
                        {post.title}
                      </Link>
                    </CardTitle>
                    <CardDescription className="text-gray-600 leading-relaxed">
                      {post.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-500">
                        {new Date(post.publishDate).toLocaleDateString('en-US', { 
                          year: 'numeric', 
                          month: 'long', 
                          day: 'numeric' 
                        })}
                      </span>
                      <Link 
                        href={`/blog/${post.slug}`}
                        className="text-red-600 hover:text-red-700 font-medium text-sm"
                      >
                        Read More →
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
        )}

        {/* Recent Posts */}
        {filteredPosts.length > 0 && (
          <section aria-labelledby="recent-posts">
            <h2 id="recent-posts" className="text-3xl font-bold text-gray-800 mb-8 flex items-center gap-2">
              📚 {selectedCategory === 'All' ? 'Recent Articles' : `${selectedCategory} Articles`}
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredPosts.map((post) => (
                <Card key={post.slug} className="rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm">
                  <CardHeader className="pb-4">
                    <div className="flex items-center justify-between mb-2">
                      <Badge variant="outline" className="text-xs">
                        {post.category}
                      </Badge>
                      <span className="text-xs text-gray-500">{post.readTime}</span>
                    </div>
                    <CardTitle className="text-lg hover:text-red-600 transition-colors line-clamp-2">
                      <Link href={`/blog/${post.slug}`} title={post.title}>
                        {post.title}
                      </Link>
                    </CardTitle>
                    <CardDescription className="text-sm text-gray-600 line-clamp-3">
                      {post.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-gray-500">
                        {new Date(post.publishDate).toLocaleDateString('en-US', { 
                          month: 'short', 
                          day: 'numeric' 
                        })}
                      </span>
                      <Link 
                        href={`/blog/${post.slug}`}
                        className="text-red-600 hover:text-red-700 font-medium text-xs"
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

        {/* No Posts Message */}
        {filteredPosts.length === 0 && filteredFeaturedPosts.length === 0 && (
          <section className="text-center py-16">
            <div className="text-6xl mb-4">📝</div>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              {selectedCategory === 'All' ? 'No Blog Posts Yet' : `No ${selectedCategory} Articles`}
            </h2>
            <p className="text-gray-600 mb-8">
              {selectedCategory === 'All' 
                ? 'Add your first blog post by creating a Markdown file in the content/blog directory.'
                : `No articles found in the ${selectedCategory} category. Try selecting a different category.`
              }
            </p>
            {selectedCategory !== 'All' && (
              <button
                onClick={() => setSelectedCategory('All')}
                className="bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700 transition-colors"
              >
                Show All Articles
              </button>
            )}
          </section>
        )}

        {/* CTA Section */}
        <section className="mt-16 text-center">
          <Card className="rounded-3xl shadow-xl max-w-2xl mx-auto bg-gradient-to-r from-red-500 via-orange-500 to-pink-500 text-white border-0">
            <CardContent className="p-8">
              <h2 className="text-3xl font-bold mb-4">Ready to Practice?</h2>
              <p className="text-lg mb-6 text-white/90">
                Apply these strategies in the actual game and see your scores improve!
              </p>
              <Link 
                href="/#play-game"
                className="inline-block bg-white text-red-600 hover:bg-gray-50 font-semibold px-8 py-3 rounded-2xl transition-colors"
              >
                🎮 Play Slice Master Now
              </Link>
            </CardContent>
          </Card>
        </section>
      </main>

      <Footer />
    </div>
  )
} 